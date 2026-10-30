"use client";
import type { HotProduct } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export function ProductCard({ product }: { product: HotProduct }) {
  const { t } = useI18n();
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">{product.platform}</span>
        <span className="text-xs font-medium text-teal-700">{product.priceBand}</span>
      </div>
      <h3 className="mt-2 font-bold text-slate-900">{t(product.titleZh, product.titleEn)}</h3>
      <p className="mt-2 text-sm text-emerald-800"><span className="font-semibold">{t("为何", "Why")}: </span>{t(product.whyZh, product.whyEn)}</p>
      <p className="mt-1 text-sm text-rose-800"><span className="font-semibold">{t("风险", "Risk")}: </span>{t(product.riskZh, product.riskEn)}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.markets.map((m) => (
          <span key={m} className="rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-medium text-teal-800">{m}</span>
        ))}
      </div>
    </article>
  );
}
