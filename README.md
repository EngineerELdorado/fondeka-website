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
remain directly accessible, as do `/docs/faq`, static files and app association endpoints.
Mobile marketing page-view pixels do not run because the redirect happens before
the page loads.

To end the campaign, set this server environment variable and redeploy:

```bash
MOBILE_STORE_REDIRECT_ENABLED=false
```

Unset it or set it to `true` and redeploy to enable redirects again. Redirects use
temporary HTTP 307 responses with caching disabled.

## Payment API search pages

`/business` and `/docs` render their content on the server in English by default
and French with `?lang=fr`. Each language has its own canonical URL, metadata,
language alternates and sitemap entry. The Business page describes access for
small businesses, students, independent developers, freelancers and startups
whose company documents are still in preparation, together with account
verification, sandbox and live-payment requirements.

The homepage and footer link to the public Payment API page; existing portal
sign-in CTAs still point to `https://web.fondeka.com`. Public integration guides
remain the source for supported REST API capabilities. Keep eligibility,
coverage and fees aligned with the published product before adding claims.

After deployment, inspect both languages in Search Console and request indexing
of the updated canonical URLs. Track impressions, clicks and qualified API
sign-ups for the intended searches, including payment APIs for startups,
individuals and students, payment gateway alternatives, API de paiement sans
société, and API de paiement pour startups sans documents. Use actual query data
to choose further guides or customer examples. These changes do not guarantee
rankings, and meta keywords alone do not establish search visibility.

## Bilingual Payment API Q&A

`/docs/faq` detects the browser's preferred supported language before rendering:
French visitors land on `/docs/faq?lang=fr`; English and unsupported languages
use the English default. Explicit `?lang=en` and `?lang=fr` links take priority.
A one-click English/Français switch stays in the header (EN/FR on phones) and
saves manual choices in the `fondeka_language` preference cookie for one year.
That saved choice takes priority over browser detection on later FAQ visits.
Without cookies, explicit language URLs still work. Crawlers receive the English
default and can discover both languages through the sitemap and alternates.
The canonical URLs are `/docs/faq?lang=en` and `/docs/faq?lang=fr`, so either
language can be opened directly regardless of browser preferences. The bare
`/docs/faq` entry is the `x-default` language-detection URL. The visible language
switch uses crawlable links and works without JavaScript; JavaScript also saves
the visitor's choice and preserves the current question when switching.
Language-dependent responses are private and uncached. Redirects also vary by
browser language, preference cookie and user agent. Mobile campaign redirects
elsewhere are unchanged. Both versions contain 120 numbered questions, fee and
country tables, a glossary and public resource links. Links appear on the API introduction, Business page and
footer. Each language has its own canonical URL, metadata, sitemap entry and
FAQ structured data.

Customer-facing source documents live in `src/content/business-api-faq.en.md`
and `src/content/business-api-faq.fr.md`. Update both when the contract or
commercial explanation changes. The lightweight server parser supports their
paragraphs, lists and tables, and checks the complete question sequence.
Publication notes are not part of these public documents.

The reader includes search, expandable answers, stable question links, a
four-question starter trail and optional reading milestones. Read markers are
stored only in the visitor's browser, shared across languages, and never affect
API access or Live eligibility. The FAQ remains accessible on phones during the
mobile campaign; the sticky app-install bar is hidden on this reading page.

The reader adopts the Business portal's neutral surfaces, semantic color tokens,
topic icon tiles, framed chevrons and comfortable controls through the scoped
`src/app/docs/faq/faq.css` stylesheet. It uses existing fonts and dependencies.
Dark token overrides follow `data-theme="dark"` when supplied by a theme host;
the page does not introduce a theme selector. The introduction has no action row
or conversion CTA. The main API CTA follows the guide and glossary; it and the
footer action open `https://web.fondeka.com`.
Reading controls, documentation links and support links retain their purposes.

Keep the FAQ country tables aligned with `src/lib/supportedCountries.js`, which
also supplies homepage coverage and the country counter. Current coverage is
12 countries; routes, directions and currencies remain account-specific.

Run `npm run test:faq`, `npm run test:language`, `npm run test:seo` and
`npm run build` after changes.
Verify both languages, mobile access, tables, search, question links and progress persistence
in the browser. The review date describes the supplied content; it is not an
announcement that new Live payments are enabled.

## Payment API search visibility

The English and French FAQ titles, summaries and selected questions describe
Mobile Money and crypto payment APIs, fees, Sandbox testing, account eligibility
and DR Congo / RDC coverage in natural language. Keep identity checks, variable
route fees and Live-readiness conditions beside the corresponding answers.
Contextual links lead to the matching published integration guide. Preserve the
120 stable question IDs so saved reading progress and shared links keep working.

Canonical URLs, language alternates, structured data and sitemap URLs use
`https://www.fondeka.com`, the public host that serves pages without the apex
redirect. The FAQ sitemap review date comes from `serviceSeo.apiFaq.lastModified`;
change it after a substantive content review, rather than on every deployment.
The FAQ's social preview uses an existing developer illustration.

Keep FAQ structured data aligned with the visible answers. Google discontinued
FAQ rich results in May 2026; markup is not a promise of a special search display
or improved ranking. See [Google's documentation updates](https://developers.google.com/search/updates).
Meta keywords are not a Google ranking signal; the work here concerns useful
content, descriptive links and consistent indexing signals.

After deployment, submit `https://www.fondeka.com/sitemap.xml` in Search Console
and inspect both explicit-language FAQ URLs. Review indexing, queries,
impressions, clicks, CTR and position by country/device over time. Query themes
in this change reflect product scope and sample searches, not measured search
volumes or a Search Console ranking report. Use observed queries to choose the
next substantive content improvements. Search rankings cannot be guaranteed.

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
Meta dataset pixel `1563520629132919` is included site-wide, with its script
loaded in the document head and a noscript image fallback in the body.

Set `NEXT_PUBLIC_META_PIXEL_IDS` before building or deploying the site to add
other Meta pixels.

```bash
NEXT_PUBLIC_META_PIXEL_IDS=1661830491640331,1338589508117186
```

Use a comma-separated list to keep multiple Meta pixels active on the same site.
Duplicate IDs are initialized only once.

Download and Install CTAs send the custom Meta event `AppDownloadClick` to all
initialized pixels. Parameters include `cta_location`, `platform` (`ios`,
`android`, or `other`), and `page_path` without query parameters. The `action`
parameter distinguishes these interactions:

| Action | Meaning | Store parameter |
| --- | --- | --- |
| `open_store` | Visitor clicks a store link, including mobile, desktop picker, and `/open` install links | `app_store` or `google_play` |
| `open_options` | Visitor opens the desktop download picker | Omitted |
| `view_download_section` | Visitor clicks Download in the mobile navigation menu | Omitted |

Use `action=open_store` to measure store handoffs separately from other CTA
interactions. Click events run before store navigation, without delaying it.
Automatic redirects and fallbacks do not emit click events. A click measures
download intent, not a completed app installation.

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
