-- ============================================
-- STEG 0: Rensa allt och börja om
-- ============================================

-- Ta bort alla kuponger
TRUNCATE TABLE coupons RESTART IDENTITY CASCADE;

-- Verifiera att tabellen är tom
SELECT COUNT(*) AS ska_vara_noll FROM coupons;
