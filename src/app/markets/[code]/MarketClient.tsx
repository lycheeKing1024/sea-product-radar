"use client";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { TrendCard } from "@/components/TrendCard";
import { getMarket, type MarketCode } from "@/data/markets";
import { productsForMarket, trendsForMarket, weekly } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export function MarketClient({ code }: { code: MarketCode }) {
  const { t } = useI18n();
  const market = getMarket(code)!;
  const digest = weekly.byMarket[code];
  const trends = trendsForMarket(code);
  const products = productsForMarket(code);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-12">
      <Link href="/markets" className="text-sm font-medium text-teal-600 hover:underline">
        ← {t("全部市场", "All markets")}
      </Link>
      <div>
        <h1 className="text-3xl font-extrabold">
          {market.code} · {t(market.nameZh, market.nameEn)}
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">{t(digest.summaryZh, digest.summaryEn)}</p>
      </div>
      <section>
        <h2 className="mb-3 text-xl font-bold">{t("相关趋势", "Related trends")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {trends.map((tr) => <TrendCard key={tr.id} trend={tr} />)}
        </div>
      </section>
      <section>
        <h2 className="mb-3 text-xl font-bold">{t("相关热品", "Related products")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
