-- ============================================================
-- CityTech Survey — survey_responses table + RLS + RPC
-- Run this in your Supabase SQL Editor ONCE
-- ============================================================

-- 1. Create the survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id          UUID         DEFAULT gen_random_uuid() PRIMARY KEY,
  language    TEXT         NOT NULL,
  location    TEXT,
  answers     JSONB        NOT NULL DEFAULT '{}',
  email       TEXT,
  created_at  TIMESTAMPTZ  DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous INSERT (survey takers)
CREATE POLICY "anon_insert_survey_responses"
  ON survey_responses FOR INSERT TO anon WITH CHECK (true);

-- 4. Allow anonymous SELECT (for admin dashboard via anon key)
CREATE POLICY "anon_select_survey_responses"
  ON survey_responses FOR SELECT TO anon USING (true);

-- ─────────────────────────────────────────────────────────────
-- Coupons table — add policies if RLS is enabled
-- ─────────────────────────────────────────────────────────────
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

-- Allow anon to read all coupons (needed for admin stats)
CREATE POLICY "anon_select_coupons"
  ON coupons FOR SELECT TO anon USING (true);

-- Allow anon to update unused coupons (claim flow)
CREATE POLICY "anon_update_unused_coupons"
  ON coupons FOR UPDATE TO anon USING (is_used = false);

-- ─────────────────────────────────────────────────────────────
-- Atomic coupon-claim RPC function (prevents race conditions)
-- ─────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION claim_coupon(p_survey_response_id UUID)
RETURNS TABLE(id UUID, url TEXT, code TEXT, expires_at DATE)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_coupon_id UUID;
BEGIN
  -- Lock one unused coupon atomically
  SELECT c.id INTO v_coupon_id
  FROM coupons c
  WHERE c.is_used = false
  ORDER BY c.expires_at ASC, c.created_at ASC
  LIMIT 1
  FOR UPDATE SKIP LOCKED;

  IF v_coupon_id IS NULL THEN
    RAISE EXCEPTION 'No coupons available';
  END IF;

  -- Mark as used
  UPDATE coupons c
  SET is_used = true,
      used_at = NOW(),
      survey_response_id = p_survey_response_id
  WHERE c.id = v_coupon_id;

  -- Return the claimed coupon
  RETURN QUERY
    SELECT c.id, c.url, c.code, c.expires_at
    FROM coupons c
    WHERE c.id = v_coupon_id;
END;
$$;

-- Grant RPC access to anon role
GRANT EXECUTE ON FUNCTION claim_coupon(UUID) TO anon;

-- ─────────────────────────────────────────────────────────────
-- Verify
-- ─────────────────────────────────────────────────────────────
SELECT COUNT(*) AS responses FROM survey_responses;
SELECT COUNT(*) AS available_coupons FROM coupons WHERE is_used = false;
