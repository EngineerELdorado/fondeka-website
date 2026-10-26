# Fondeka Web (Next.js + Tailwind, JS, /src)

Inspired by the clarity of Wise/TransferWise, adapted to Fondeka's brand.

## Quickstart
```bash
npm i
npm run dev
```
This repo uses the App Router and `/src` directory. JS only (no TS).

## Temporary mobile campaign redirect

Enabled by default: phone visitors to marketing pages are immediately redirected
to the Fondeka App Store listing on iOS or a lightweight native Google Play handoff
on Android, before the marketing page renders. No website prompt or click is
required. The Android handoff attempts to open the Google Play app directly to
Fondeka, with the web listing as an automatic fallback after 1.2 seconds if the
browser blocks the app launch. Browsers and operating systems may still require
their own confirmation; a native launch cannot be guaranteed without a tap.
Android redirects forward URL query parameters in Google Play's `referrer`
parameter for campaign attribution. Android install buttons also use a Google
Play intent with the web listing as its browser fallback.

Desktop visitors, tablets, and known crawlers receive the website. `/privacy`,
`/end-user-agreement`, `/compliance`, `/support`, and `/open` (including subpaths)
remain directly accessible, as do static files and app association endpoints.
Mobile marketing page-view pixels do not run because the redirect happens before
the page loads.

To end the campaign, set this server environment variable and redeploy:

```bash
MOBILE_STORE_REDIRECT_ENABLED=false
```

Unset it or set it to `true` and redeploy to enable redirects again. Redirects use
temporary HTTP 307 responses with caching disabled.

## Google Tag
Set `NEXT_PUBLIC_GOOGLE_TAG_IDS` to your Google tag IDs before building or deploying the site.

```bash
NEXT_PUBLIC_GOOGLE_TAG_IDS=AW-123456789,GT-ABCDEFGH
```

Use a comma-separated list if you need to load more than one Google tag. For Google Ads, the important ID is typically your `AW-...` tag.

## LinkedIn Insight Tag
Set `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` before building or deploying the site.

```bash
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=9131674
```

## Meta Pixel
Set `NEXT_PUBLIC_META_PIXEL_IDS` before building or deploying the site.

```bash
NEXT_PUBLIC_META_PIXEL_IDS=1661830491640331,1338589508117186
```

Use a comma-separated list to keep multiple Meta pixels active on the same site.

## Customize
- Edit `src/lib/brand.js` for colors and strings.
- Sections live in `src/app/page.js` and `src/components/*`.
- Replace placeholder images in `/public` with real app mockups.

## Smart Deep Link Route
- Route: `/open`
- Example:
```text
https://www.fondeka.com/open?target=transaction/3459&source=push&transactionId=3459
```
- Behavior:
  - iOS: attempts `fondeka://<target>?...`, then falls back to App Store.
  - Android: attempts Intent/App scheme, then falls back to Google Play.
  - Desktop: shows QR + explicit store CTAs.
- Attribution:
  - Query params are forwarded to app-open attempts.
  - Query params are forwarded to store fallback links where supported (Play `referrer`, App Store `ct`).
- Backend/admin link generation for app-intent journeys should use `/open?...` links, not raw web paths.
