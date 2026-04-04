export default function sitemap() {
  return [
    {
      url: 'https://biznabi.co.kr',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
