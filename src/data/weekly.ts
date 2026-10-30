import raw from "./weekly.json";
import type { MarketCode } from "./markets";

export type Trend = {
  id: string;
  rank: number;
  platform: string;
  markets: MarketCode[];
  titleZh: string;
  titleEn: string;
  signalZh: string;
  signalEn: string;
  heat: number;
  change: string;
};

export type HotProduct = {
  id: string;
  skuHint: string;
  titleZh: string;
  titleEn: string;
  platform: string;
  markets: MarketCode[];
  priceBand: string;
  whyZh: string;
  whyEn: string;
  riskZh: string;
  riskEn: string;
};

export type MarketDigest = {
  summaryZh: string;
  summaryEn: string;
  topTrendIds: string[];
};

export type WeeklyDigest = {
  version: number;
  weekOf: string;
  generatedAt: string;
  demo: boolean;
  summaryZh: string;
  summaryEn: string;
  trends: Trend[];
  hotProducts: HotProduct[];
  byMarket: Record<MarketCode, MarketDigest>;
};

export const weekly = raw as WeeklyDigest;

export function trendsForMarket(code: MarketCode) {
  return weekly.trends.filter((t) => t.markets.includes(code));
}

export function productsForMarket(code: MarketCode) {
  return weekly.hotProducts.filter((p) => p.markets.includes(code));
}
