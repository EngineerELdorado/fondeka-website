export default function robots() {
    return {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: 'https://fondeka.com/sitemap.xml',
    };
}
