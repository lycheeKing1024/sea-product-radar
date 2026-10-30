# 东南亚选品雷达 / SEA Product Radar

Bilingual weekly radar for Shopee / TikTok Shop trends and hot products across MY, SG, TH, ID, VN, PH.

## Run

```bash
cd /workspace/sea-product-radar
npm install
npm run dev
npm run build
```

## Deploy (Vercel free)

Import in Vercel or `npx vercel`. No env vars. `*.vercel.app` OK.

## Weekly update

Replace/extend `src/data/weekly.json`, bump `weekOf` / summaries. Commit → deploy when linked.

## Routes

`/` · `/trends` · `/markets` · `/markets/MY` (etc.) · `/sponsor` · `/about`

Sponsor pricing TBD; no payment integration yet.
