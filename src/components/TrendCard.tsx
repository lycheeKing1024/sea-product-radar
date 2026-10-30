"use client";
import type { Trend } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export function TrendCard({ trend }: { trend: Trend }) {
  const { t } = useI18n();
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
          #{trend.rank}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">{trend.platform}</span>
      </div>
      <h3 className="mt-3 font-bold text-slate-900">{t(trend.titleZh, trend.titleEn)}</h3>
      <p className="mt-2 text-sm text-slate-600">{t(trend.signalZh, trend.signalEn)}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {trend.markets.map((m) => (
          <span key={m} className="rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-medium text-teal-800">{m}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-500">{t("热度", "Heat")} {trend.heat}</span>
        <span className="font-bold text-emerald-600">{trend.change}</span>
      </div>
    </article>
  );
}
