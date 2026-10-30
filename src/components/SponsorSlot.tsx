"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function SponsorSlot() {
  const { t } = useI18n();
  return (
    <aside className="relative overflow-hidden rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-6" aria-label={t("赞助位", "Sponsor")}>
      <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold text-white">{t("赞助位 / Sponsor", "Sponsor")}</span>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{t("把选品/供应链服务推给 SEA 卖家", "Reach SEA sellers with your product/supply offer")}</h3>
      <p className="mt-2 text-sm text-slate-600">{t("价格待定，先聊市场与档位。", "Pricing TBD — talk markets & tiers first.")}</p>
      <Link href="/sponsor" className="mt-4 inline-flex rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">{t("了解赞助 →", "Sponsor info →")}</Link>
    </aside>
  );
}
