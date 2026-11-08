import fr from '@/content/terms-of-use.fr.json';
import en from '@/content/terms-of-use.en.json';
import { termsLanguage } from '@/lib/language';
import { siteUrl } from '@/lib/seo';

const content = { fr, en };
const languageUrls = {
    fr: '/end-user-agreement?lang=fr',
    en: '/end-user-agreement?lang=en',
    'x-default': '/end-user-agreement?lang=fr',
};

export function generateMetadata({ searchParams }) {
    const lang = termsLanguage(searchParams.lang);
    const terms = content[lang];
    const title = `${terms.title} | Fondeka`;
    const description = terms.articles[0].paragraphs[0];
    return {
        title,
        description,
        alternates: { canonical: languageUrls[lang], languages: languageUrls },
        openGraph: {
            title,
            description,
            url: `${siteUrl}${languageUrls[lang]}`,
            locale: lang === 'fr' ? 'fr_CD' : 'en_US',
            alternateLocale: lang === 'fr' ? 'en_US' : 'fr_CD',
            type: 'website',
        },
        twitter: { title, description },
    };
}

export default function TermsOfUsePage({ searchParams }) {
    const lang = termsLanguage(searchParams.lang);
    const terms = content[lang];

    return (
        <main lang={lang} className="section">
            <div className="container-pad">
                <article className="mx-auto max-w-3xl" aria-labelledby="terms-title">
                    <h1 id="terms-title" className="text-3xl font-bold leading-tight md:text-4xl">{terms.title}</h1>
                    <p className="mt-3 font-semibold text-gray-700">{terms.company}</p>
                    <div className="mt-8 grid gap-6">
                        {terms.articles.map((article, index) => (
                            <section key={article.title} id={`article-${index + 1}`} aria-labelledby={`article-${index + 1}-title`} className="card scroll-mt-28">
                                <h2 id={`article-${index + 1}-title`} className="text-lg font-semibold">{article.title}</h2>
                                <div className="mt-4 space-y-4 leading-relaxed text-gray-700">
                                    {article.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                                    {article.steps && (
                                        <ol className="list-decimal space-y-2 pl-6">
                                            {article.steps.map(step => <li key={step}>{step}</li>)}
                                        </ol>
                                    )}
                                    {article.afterSteps?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                                </div>
                            </section>
                        ))}
                    </div>
                </article>
            </div>
        </main>
    );
}
