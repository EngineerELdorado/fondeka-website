export const languagePreferenceCookie = 'fondeka_language';

// The French source terms apply when no supported translation is requested.
export function termsLanguage(value) {
  const requested = Array.isArray(value) ? value[0] : value;
  return typeof requested === 'string' && /^en(?:-|$)/i.test(requested) ? 'en' : 'fr';
}

// Prefer a deliberate choice; otherwise negotiate the two supported languages.
export function preferredLanguage(acceptLanguage = '', savedLanguage) {
  if (savedLanguage === 'en' || savedLanguage === 'fr') return savedLanguage;

  const ranges = String(acceptLanguage || '').split(',').map((item, index) => {
    const [tag, ...parameters] = item.trim().toLowerCase().split(';');
    const quality = parameters.find(parameter => /^\s*q\s*=/.test(parameter));
    const weight = quality === undefined ? 1 : Number(quality.split('=')[1].trim());
    return {
      language: tag.trim().split('-')[0],
      weight: Number.isFinite(weight) && weight >= 0 && weight <= 1 ? weight : 0,
      index,
    };
  });

  const candidates = ['en', 'fr'].map(language => {
    const specific = ranges.filter(range => range.language === language);
    const matches = specific.length ? specific : ranges.filter(range => range.language === '*');
    const best = [...matches].sort((a, b) => b.weight - a.weight || a.index - b.index)[0];
    return { language, weight: best?.weight ?? 0, index: best?.index ?? Infinity };
  });
  candidates.sort((a, b) => b.weight - a.weight || a.index - b.index);
  return candidates[0].weight > 0 ? candidates[0].language : 'en';
}
