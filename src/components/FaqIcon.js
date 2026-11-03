export const faqTopicVisuals = [
  { icon: 'book', tone: 'blue' },
  { icon: 'globe', tone: 'teal' },
  { icon: 'key', tone: 'violet' },
  { icon: 'receipt', tone: 'amber' },
  { icon: 'flask', tone: 'amber' },
  { icon: 'code', tone: 'blue' },
  { icon: 'incoming', tone: 'teal' },
  { icon: 'outgoing', tone: 'blue' },
  { icon: 'wallet', tone: 'teal' },
  { icon: 'repeat', tone: 'violet' },
  { icon: 'shield', tone: 'rose' },
  { icon: 'growth', tone: 'green' },
  { icon: 'help', tone: 'blue' },
];

export default function FaqIcon({ name = 'book', className = '' }) {
  const paths = {
    book: <><path d="M12 7v14m0-14C9 4 5 4 2 5v14c4-1 7 0 10 2m0-14c3-3 7-3 10-2v14c-4-1-7 0-10 2" /></>,
    help: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H5l-3 2V11.5A8.5 8.5 0 0 1 10.5 3h2a8.5 8.5 0 0 1 8.5 8.5Z" /><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 1.5-2.5 3m0 3h.01" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    key: <><circle cx="8" cy="8" r="5" /><path d="m11.5 11.5 9 9M16 16l3-3m0 6 3-3" /></>,
    receipt: <><path d="M6 3 4 5v16l4-2 4 2 4-2 4 2V5l-2-2-2 2-2-2-2 2-2-2-2 2-2-2Z" /><path d="M8 9h8m-8 4h6" /></>,
    flask: <><path d="M9 3h6m-5 0v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 14h10" /></>,
    code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5m-3-14-4 18" /></>,
    incoming: <><path d="M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5" /></>,
    outgoing: <><path d="M12 15V3M7 8l5-5 5 5M4 15v5h16v-5" /></>,
    wallet: <><path d="M20 8V5a2 2 0 0 0-2-2H6a3 3 0 0 0 0 6h14v12H6a3 3 0 0 1-3-3V6" /><path d="M20 12h-5v5h5m-3-2.5h.01" /></>,
    repeat: <><path d="m17 2 4 4-4 4M3 11V8a2 2 0 0 1 2-2h16M7 22l-4-4 4-4m14-1v3a2 2 0 0 1-2 2H3" /></>,
    shield: <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></>,
    growth: <><path d="M3 3v18h18M7 14l5-5 4 3 5-7m-5 0h5v5" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    external: <><path d="M14 3h7v7m0-7L10 14M10 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    link: <><path d="m10 13 4-4m-6 7-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 0 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.book}</svg>;
}

export function FaqIconTile({ icon, tone = 'green', className = '' }) {
  return <span className={`faq-icon-tile ${className}`} data-faq-tone={tone}><FaqIcon name={icon} /></span>;
}
