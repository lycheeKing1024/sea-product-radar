"use client";
import { ProductCard } from "@/components/ProductCard";
import { TrendCard } from "@/components/TrendCard";
import { siteConfig } from "@/data/site";
import { weekly } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export default function TrendsPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:py-12">
      <div>
        <h1 className="text-3xl font-extrabold">{t("趋势周报", "Weekly trends")}</h1>
        <p className="mt-2 text-slate-600">{t("周起始", "Week of")} {weekly.weekOf}</p>
      </div>
      <p className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs text-violet-900">
        {t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}
      </p>
      <p className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
        {t(weekly.summaryZh, weekly.summaryEn)}
      </p>
      <section>
        <h2 className="mb-4 text-xl font-bold">{t("趋势榜", "Trend board")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weekly.trends.map((tr) => <TrendCard key={tr.id} trend={tr} />)}
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-bold">{t("热品", "Hot products")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weekly.hotProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
