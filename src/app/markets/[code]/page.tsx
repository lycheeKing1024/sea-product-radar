import { notFound } from "next/navigation";
import { getMarket, markets } from "@/data/markets";
import { MarketClient } from "./MarketClient";

export function generateStaticParams() {
  return markets.map((m) => ({ code: m.code }));
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const market = getMarket(code);
  if (!market) notFound();
  return <MarketClient code={market.code} />;
}
