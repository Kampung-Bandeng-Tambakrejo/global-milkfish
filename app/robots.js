export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://umkmglobalmilkfish.vercel.app/sitemap.xml',
  }
}