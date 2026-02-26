import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, RefreshCw, Download, Users, Ticket, Globe, MapPin, TrendingUp, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// ── Admin PIN (change here if needed) ──────────────────────────────────────
const ADMIN_PIN = '2024';

interface SurveyResponse {
  id: string;
  language: string;
  location: string | null;
  answers: Record<string, string>;
  email: string | null;
  created_at: string;
}

interface CouponStats {
  total: number;
  used: number;
  remaining: number;
  batch1Used: number;
  batch1Total: number;
  batch2Used: number;
  batch2Total: number;
}

const LANG_LABELS: Record<string, string> = {
  sv: '🇸🇪 Svenska',
  no: '🇳🇴 Norsk',
  ru: '🇷🇺 Русский',
  ar: '🇸🇦 العربية',
  en: '🇬🇧 English',
};

const CHART_COLORS = ['#2563eb', '#f97316', '#10b981', '#8b5cf6', '#ef4444', '#06b6d4'];

export function AdminPage() {
  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [couponStats, setCouponStats] = useState<CouponStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const handlePinSubmit = () => {
    if (pin === ADMIN_PIN) {
      setAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch responses
      const { data: rData, error: rErr } = await supabase
        .from('survey_responses')
        .select('*')
        .order('created_at', { ascending: false });
      if (!rErr && rData) setResponses(rData);

      // Fetch coupon stats
      const { data: cData, error: cErr } = await supabase.from('coupons').select('is_used, batch');
      if (!cErr && cData) {
        const b1 = cData.filter((c) => c.batch === 1);
        const b2 = cData.filter((c) => c.batch === 2);
        setCouponStats({
          total: cData.length,
          used: cData.filter((c) => c.is_used).length,
          remaining: cData.filter((c) => !c.is_used).length,
          batch1Total: b1.length,
          batch1Used: b1.filter((c) => c.is_used).length,
          batch2Total: b2.length,
          batch2Used: b2.filter((c) => c.is_used).length,
        });
      }
      setLastRefresh(new Date());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchData();
  }, [authenticated, fetchData]);

  // ── Aggregations ───────────────────────────────────────────────────────────
  const byLanguage = responses.reduce<Record<string, number>>((acc, r) => {
    const key = r.language ?? 'unknown';
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  const byLocation = responses.reduce<Record<string, number>>((acc, r) => {
    const key = r.location ?? 'Unknown';
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  const langChartData = Object.entries(byLanguage).map(([lang, count]) => ({
    name: LANG_LABELS[lang] ?? lang,
    count,
  }));

  const locChartData = Object.entries(byLocation)
    .sort((a, b) => b[1] - a[1])
    .map(([loc, count]) => ({ name: loc, count }));

  // CSV Export
  const exportCSV = () => {
    if (!responses.length) return;
    const headers = ['ID', 'Language', 'Location', 'Email', 'Created At', ...Array.from({ length: 10 }, (_, i) => `Q${i}`)];
    const rows = responses.map((r) => [
      r.id,
      r.language,
      r.location ?? '',
      r.email ?? '',
      r.created_at,
      ...Array.from({ length: 10 }, (_, i) => r.answers?.[`q${i}`] ?? ''),
    ]);
    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `citytech_survey_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  // PDF Export
  const exportPDF = () => {
    if (!responses.length) return;

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const now = new Date();
    const dateStr = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });

    // ── Sida 1: Framsida ──────────────────────────────────────────────────────
    // Bakgrundsgradient (simulerad med rektanglar)
    doc.setFillColor(10, 10, 30);
    doc.rect(0, 0, pageW, pageH, 'F');

    // Accentlinje
    doc.setFillColor(254, 204, 2);
    doc.rect(0, 0, pageW, 4, 'F');

    // CityTech logotyp-text
    doc.setTextColor(254, 204, 2);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.text('CityTech', pageW / 2, 60, { align: 'center' });

    // Underrubrik
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Undersökningsrapport', pageW / 2, 74, { align: 'center' });

    // Linje
    doc.setDrawColor(254, 204, 2);
    doc.setLineWidth(0.5);
    doc.line(30, 82, pageW - 30, 82);

    // Datum & tid
    doc.setTextColor(180, 180, 200);
    doc.setFontSize(10);
    doc.text(`Genererad: ${dateStr} kl. ${timeStr}`, pageW / 2, 92, { align: 'center' });

    // KPI-boxar
    const kpis = [
      { label: 'Totalt svar', value: String(responses.length) },
      { label: 'Kuponger använda', value: String(couponStats?.used ?? '–') },
      { label: 'Kuponger kvar', value: String(couponStats?.remaining ?? '–') },
      { label: 'Unika språk', value: String(Object.keys(byLanguage).length) },
      { label: 'Har lämnat e-post', value: String(responses.filter(r => r.email).length) },
    ];

    const boxW = 34;
    const boxH = 24;
    const boxGap = 4;
    const totalBoxW = kpis.length * boxW + (kpis.length - 1) * boxGap;
    let bx = (pageW - totalBoxW) / 2;
    const by = 108;

    kpis.forEach((kpi) => {
      doc.setFillColor(30, 30, 60);
      doc.roundedRect(bx, by, boxW, boxH, 3, 3, 'F');
      doc.setTextColor(254, 204, 2);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(kpi.value, bx + boxW / 2, by + 11, { align: 'center' });
      doc.setTextColor(160, 160, 190);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.text(kpi.label, bx + boxW / 2, by + 19, { align: 'center' });
      bx += boxW + boxGap;
    });

    // Yttre Helgeland
    doc.setTextColor(100, 100, 140);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Yttre Helgeland · Sandnessjøen · Herøy · Dønna · Leirfjord', pageW / 2, 148, { align: 'center' });

    // Sidfot
    doc.setTextColor(60, 60, 80);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Konfidentiellt – CityTech AS', pageW / 2, pageH - 10, { align: 'center' });

    // ── Sida 2: Svar per språk & ort ─────────────────────────────────────────
    doc.addPage();
    doc.setFillColor(10, 10, 30);
    doc.rect(0, 0, pageW, pageH, 'F');
    doc.setFillColor(254, 204, 2);
    doc.rect(0, 0, pageW, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Svar per språk', 14, 20);

    autoTable(doc, {
      startY: 26,
      head: [['Språk', 'Antal svar', 'Andel (%)']],
      body: Object.entries(byLanguage)
        .sort((a, b) => b[1] - a[1])
        .map(([lang, count]) => [
          LANG_LABELS[lang] ?? lang,
          count,
          `${((count / responses.length) * 100).toFixed(1)} %`,
        ]),
      styles: { fillColor: [20, 20, 45], textColor: [220, 220, 240], fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [254, 204, 2], textColor: [10, 10, 30], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [28, 28, 55] },
      margin: { left: 14, right: 14 },
    });

    const afterLang = (doc as any).lastAutoTable.finalY + 10;

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Svar per ort', 14, afterLang);

    autoTable(doc, {
      startY: afterLang + 6,
      head: [['Ort', 'Antal svar', 'Andel (%)']],
      body: Object.entries(byLocation)
        .sort((a, b) => b[1] - a[1])
        .map(([loc, count]) => [
          loc,
          count,
          `${((count / responses.length) * 100).toFixed(1)} %`,
        ]),
      styles: { fillColor: [20, 20, 45], textColor: [220, 220, 240], fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [28, 28, 55] },
      margin: { left: 14, right: 14 },
    });

    // ── Sida 3: Kupongstatistik & e-postlista ─────────────────────────────────
    doc.addPage();
    doc.setFillColor(10, 10, 30);
    doc.rect(0, 0, pageW, pageH, 'F');
    doc.setFillColor(254, 204, 2);
    doc.rect(0, 0, pageW, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Kupongstatistik', 14, 20);

    if (couponStats) {
      autoTable(doc, {
        startY: 26,
        head: [['Batch', 'Totalt', 'Använda', 'Kvar', 'Utnyttjandegrad']],
        body: [
          [
            'Batch 1 (utg. 10 juni)',
            couponStats.batch1Total,
            couponStats.batch1Used,
            couponStats.batch1Total - couponStats.batch1Used,
            couponStats.batch1Total > 0
              ? `${((couponStats.batch1Used / couponStats.batch1Total) * 100).toFixed(1)} %`
              : '–',
          ],
          [
            'Batch 2 (utg. 17 juni)',
            couponStats.batch2Total,
            couponStats.batch2Used,
            couponStats.batch2Total - couponStats.batch2Used,
            couponStats.batch2Total > 0
              ? `${((couponStats.batch2Used / couponStats.batch2Total) * 100).toFixed(1)} %`
              : '–',
          ],
          [
            'Totalt',
            couponStats.total,
            couponStats.used,
            couponStats.remaining,
            couponStats.total > 0
              ? `${((couponStats.used / couponStats.total) * 100).toFixed(1)} %`
              : '–',
          ],
        ],
        styles: { fillColor: [20, 20, 45], textColor: [220, 220, 240], fontSize: 10, cellPadding: 4 },
        headStyles: { fillColor: [5, 150, 105], textColor: [255, 255, 255], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [28, 28, 55] },
        margin: { left: 14, right: 14 },
      });
    }

    const emailList = responses.filter(r => r.email);
    if (emailList.length > 0) {
      const afterCoupons = (doc as any).lastAutoTable.finalY + 10;
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(`E-postlista (${emailList.length} st)`, 14, afterCoupons);

      autoTable(doc, {
        startY: afterCoupons + 6,
        head: [['#', 'E-postadress', 'Språk', 'Ort', 'Datum']],
        body: emailList.map((r, i) => [
          i + 1,
          r.email ?? '',
          LANG_LABELS[r.language] ?? r.language,
          r.location ?? '–',
          new Date(r.created_at).toLocaleDateString('sv-SE'),
        ]),
        styles: { fillColor: [20, 20, 45], textColor: [220, 220, 240], fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [124, 58, 237], textColor: [255, 255, 255], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [28, 28, 55] },
        margin: { left: 14, right: 14 },
      });
    }

    // ── Sida 4+: Alla detaljerade svar ────────────────────────────────────────
    doc.addPage();
    doc.setFillColor(10, 10, 30);
    doc.rect(0, 0, pageW, pageH, 'F');
    doc.setFillColor(254, 204, 2);
    doc.rect(0, 0, pageW, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(`Alla svar (${responses.length} st)`, 14, 20);

    autoTable(doc, {
      startY: 26,
      head: [['#', 'Datum', 'Språk', 'Ort', 'E-post', 'Q0', 'Q1', 'Q2', 'Q3', 'Q4']],
      body: responses.map((r, idx) => [
        responses.length - idx,
        new Date(r.created_at).toLocaleDateString('sv-SE'),
        LANG_LABELS[r.language] ?? r.language,
        r.location ?? '–',
        r.email ?? '–',
        r.answers?.q0 ?? '–',
        r.answers?.q1 ?? '–',
        r.answers?.q2 ?? '–',
        r.answers?.q3 ?? '–',
        r.answers?.q4 ?? '–',
      ]),
      styles: { fillColor: [20, 20, 45], textColor: [220, 220, 240], fontSize: 7, cellPadding: 2.5, overflow: 'ellipsize' },
      headStyles: { fillColor: [30, 58, 138], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 7 },
      alternateRowStyles: { fillColor: [28, 28, 55] },
      margin: { left: 14, right: 14 },
      didDrawPage: (data: any) => {
        // Sidhuvud på varje ny sida
        doc.setFillColor(10, 10, 30);
        doc.rect(0, 0, pageW, 8, 'F');
        doc.setTextColor(100, 100, 140);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.text('CityTech · Undersökningsrapport · Konfidentiellt', pageW / 2, 6, { align: 'center' });
        // Sidfot
        doc.setTextColor(60, 60, 80);
        doc.text(
          `Sida ${doc.getCurrentPageInfo().pageNumber}`,
          pageW / 2,
          pageH - 6,
          { align: 'center' }
        );
      },
    });

    // Spara filen
    doc.save(`citytech_rapport_${now.toISOString().slice(0, 10)}.pdf`);
  };

  // ── PIN Screen ─────────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-sm w-full shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-600/30 flex items-center justify-center">
              <Lock size={28} className="text-blue-300" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white text-center mb-1">Admin Panel</h1>
          <p className="text-xs text-white/60 text-center mb-6">CityTech Survey Dashboard</p>

          <input
            type="password"
            maxLength={8}
            placeholder="PIN-kod"
            value={pin}
            onChange={(e) => { setPin(e.target.value); setPinError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handlePinSubmit()}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-center text-lg tracking-widest placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          />
          {pinError && (
            <p className="text-red-400 text-xs text-center mb-3">Fel PIN-kod. Försök igen.</p>
          )}
          <button
            onClick={handlePinSubmit}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all active:scale-95"
          >
            Logga in
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <TrendingUp size={16} />
            </div>
            <div>
              <h1 className="font-bold text-white text-sm">CityTech Admin</h1>
              {lastRefresh && (
                <p className="text-[10px] text-white/40">
                  Uppdaterat: {lastRefresh.toLocaleTimeString('sv-SE')}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-bold transition-all"
            >
              <Download size={12} />
              CSV
            </button>
            <button
              onClick={exportPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs font-bold transition-all"
            >
              <FileText size={12} />
              PDF
            </button>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-all disabled:opacity-50"
            >
              <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
              Uppdatera
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Users size={20} />, label: 'Totalt svar', value: responses.length, color: 'text-blue-400' },
            { icon: <Ticket size={20} />, label: 'Kuponger använda', value: couponStats?.used ?? '–', color: 'text-emerald-400' },
            { icon: <Ticket size={20} />, label: 'Kuponger kvar', value: couponStats?.remaining ?? '–', color: 'text-orange-400' },
            { icon: <Globe size={20} />, label: 'Unika språk', value: Object.keys(byLanguage).length, color: 'text-purple-400' },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div className={`${kpi.color} mb-2`}>{kpi.icon}</div>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
              <div className="text-[11px] text-white/50 mt-0.5">{kpi.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Coupon batch breakdown */}
        {couponStats && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h2 className="text-sm font-bold text-white/80 mb-3 flex items-center gap-2">
              <Ticket size={14} /> Kupongbatcher
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Batch 1 (utg. 10 juni)', used: couponStats.batch1Used, total: couponStats.batch1Total },
                { label: 'Batch 2 (utg. 17 juni)', used: couponStats.batch2Used, total: couponStats.batch2Total },
              ].map((b, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-white/60 mb-1">{b.label}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-lg font-bold">{b.used}</span>
                    <span className="text-xs text-white/40 mb-0.5">/ {b.total}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all"
                      style={{ width: `${b.total > 0 ? (b.used / b.total) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* By language */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h2 className="text-sm font-bold text-white/80 mb-3 flex items-center gap-2">
              <Globe size={14} /> Svar per språk
            </h2>
            {langChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={langChartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fill: '#ffffff80', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#ffffff80', fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: '#1e293b', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {langChartData.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-xs text-white/30 text-center py-8">Inga data ännu</p>
            )}
          </div>

          {/* By location */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h2 className="text-sm font-bold text-white/80 mb-3 flex items-center gap-2">
              <MapPin size={14} /> Svar per ort
            </h2>
            {locChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={locChartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fill: '#ffffff80', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#ffffff80', fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: '#1e293b', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {locChartData.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-xs text-white/30 text-center py-8">Inga data ännu</p>
            )}
          </div>
        </div>

        {/* Responses table */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <h2 className="text-sm font-bold text-white/80 flex items-center gap-2">
              <Users size={14} /> Alla svar ({responses.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-3 py-2 text-left text-white/50 font-medium">#</th>
                  <th className="px-3 py-2 text-left text-white/50 font-medium">Tid</th>
                  <th className="px-3 py-2 text-left text-white/50 font-medium">Språk</th>
                  <th className="px-3 py-2 text-left text-white/50 font-medium">Ort</th>
                  <th className="px-3 py-2 text-left text-white/50 font-medium">E-post</th>
                  <th className="px-3 py-2 text-left text-white/50 font-medium">Svar</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {responses.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-3 py-8 text-center text-white/30">
                        {loading ? 'Laddar...' : 'Inga svar ännu'}
                      </td>
                    </tr>
                  ) : (
                    responses.map((r, idx) => (
                      <motion.tr
                        key={r.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-3 py-2 text-white/40">{responses.length - idx}</td>
                        <td className="px-3 py-2 text-white/60">
                          {new Date(r.created_at).toLocaleString('sv-SE', {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
                          })}
                        </td>
                        <td className="px-3 py-2">
                          <span className="px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-300">
                            {LANG_LABELS[r.language] ?? r.language}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-white/80">{r.location ?? '–'}</td>
                        <td className="px-3 py-2 text-white/60">
                          {r.email ? (
                            <span className="text-emerald-400">{r.email}</span>
                          ) : (
                            <span className="text-white/20">–</span>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          <details className="cursor-pointer">
                            <summary className="text-white/40 hover:text-white/80 transition-colors">
                              Visa svar
                            </summary>
                            <div className="mt-1 space-y-0.5">
                              {Object.entries(r.answers ?? {}).map(([key, val]) => (
                                <div key={key} className="flex gap-1">
                                  <span className="text-white/30 uppercase">{key}:</span>
                                  <span className="text-white/70">{val}</span>
                                </div>
                              ))}
                            </div>
                          </details>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}