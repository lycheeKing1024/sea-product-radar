"use client";
import Link from "next/link";
import { markets } from "@/data/markets";
import { weekly } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export default function MarketsPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold">{t("东南亚市场", "SEA markets")}</h1>
      <p className="text-slate-600">{t("MY / SG / TH / ID / VN / PH", "MY / SG / TH / ID / VN / PH")}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((m) => {
          const digest = weekly.byMarket[m.code];
          return (
            <Link key={m.code} href={`/markets/${m.code}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-700">{m.code}</span>
                <span className="text-xs text-slate-400">{m.currency}</span>
              </div>
              <h2 className="mt-1 text-lg font-bold text-slate-900">{t(m.nameZh, m.nameEn)}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{t(digest.summaryZh, digest.summaryEn)}</p>
              <p className="mt-3 text-sm font-medium text-teal-600">{t("进入市场页", "Open market")} →</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
