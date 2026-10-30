"use client";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { SponsorSlot } from "@/components/SponsorSlot";
import { TrendCard } from "@/components/TrendCard";
import { markets } from "@/data/markets";
import { siteConfig } from "@/data/site";
import { weekly } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useI18n();
  const topTrends = weekly.trends.slice(0, 4);
  const topProducts = weekly.hotProducts.slice(0, 4);
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:py-12">
      <section className="rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-700 px-6 py-10 text-white shadow-lg sm:px-10">
        <p className="text-sm font-semibold text-teal-100">
          {t("周报", "Weekly")} · {weekly.weekOf}
          {weekly.demo ? ` · ${t("演示数据", "Demo data")}` : ""}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{t(siteConfig.nameZh, siteConfig.nameEn)}</h1>
        <p className="mt-3 max-w-2xl text-teal-50">{t(siteConfig.taglineZh, siteConfig.taglineEn)}</p>
        <p className="mt-4 max-w-2xl rounded-xl bg-white/10 px-4 py-3 text-sm text-teal-50 backdrop-blur">
          {t(weekly.summaryZh, weekly.summaryEn)}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/trends" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-teal-700">{t("看趋势", "Trends")}</Link>
          <Link href="/markets" className="rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold">{t("六国市场", "6 markets")}</Link>
        </div>
      </section>

      <p className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs text-violet-900">
        {t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}
      </p>

      <section>
        <h2 className="mb-3 text-xl font-bold">{t("市场快捷入口", "Markets")}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((m) => (
            <Link key={m.code} href={`/markets/${m.code}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-teal-200 hover:shadow-md">
              <div className="text-lg font-bold text-teal-700">{m.code}</div>
              <div className="mt-1 text-sm text-slate-700">{t(m.nameZh, m.nameEn)}</div>
            </Link>
          ))}
        </div>
      </section>

      <SponsorSlot />

      <section>
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">{t("本周趋势", "This week’s trends")}</h2>
          <Link href="/trends" className="text-sm text-teal-600 hover:underline">{t("全部", "All")} →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{topTrends.map((tr) => <TrendCard key={tr.id} trend={tr} />)}</div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">{t("热品摘录", "Hot products")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">{topProducts.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
}
