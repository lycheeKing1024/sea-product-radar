export type MarketCode = "MY" | "SG" | "TH" | "ID" | "VN" | "PH";

export type Market = {
  code: MarketCode;
  nameZh: string;
  nameEn: string;
  currency: string;
};

export const markets: Market[] = [
  { code: "MY", nameZh: "马来西亚", nameEn: "Malaysia", currency: "MYR" },
  { code: "SG", nameZh: "新加坡", nameEn: "Singapore", currency: "SGD" },
  { code: "TH", nameZh: "泰国", nameEn: "Thailand", currency: "THB" },
  { code: "ID", nameZh: "印尼", nameEn: "Indonesia", currency: "IDR" },
  { code: "VN", nameZh: "越南", nameEn: "Vietnam", currency: "VND" },
  { code: "PH", nameZh: "菲律宾", nameEn: "Philippines", currency: "PHP" },
];

export function getMarket(code: string) {
  return markets.find((m) => m.code === code.toUpperCase());
}
