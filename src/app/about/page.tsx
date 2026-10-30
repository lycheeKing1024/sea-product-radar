"use client";
import { siteConfig } from "@/data/site";
import { weekly } from "@/data/weekly";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold">{t("关于", "About")}</h1>
      <p className="text-slate-700 leading-relaxed">
        {t(
          `${siteConfig.nameZh} 汇总 Shopee / TikTok Shop 东南亚趋势与热品周报，中英摘要。数据在 JSON，方便周更。`,
          `${siteConfig.nameEn} summarizes Shopee / TikTok Shop SEA trends & hot products weekly, bilingual. JSON data for easy weekly updates.`,
        )}
      </p>
      <p className="text-sm text-slate-500">{t("当前周", "Current week")}: {weekly.weekOf}</p>
      <p className="text-sm text-violet-800 bg-violet-50 rounded-xl px-4 py-3">{t(siteConfig.demoNoticeZh, siteConfig.demoNoticeEn)}</p>
    </div>
  );
}
