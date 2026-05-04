export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/dashboard', '/work', '/admin', '/client'],
    },
    sitemap: 'https://biznabi.com/sitemap.xml',
  }
}
