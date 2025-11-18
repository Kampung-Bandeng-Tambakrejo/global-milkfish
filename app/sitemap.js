export default function sitemap() {
 
  const baseUrl = 'https://umkmglobalmilkfish.vercel.app/'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}