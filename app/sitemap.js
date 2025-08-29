// app/sitemap.js
export default function sitemap() {
    const baseUrl = 'https://paradane.com';
    
    // Static pages - update these based on your actual pages
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1.0,
      },
    ];
  
    // If you have dynamic pages (blog posts, products, etc.), add them here
    // Example for blog posts:
    // const blogPosts = await getBlogPosts(); // Your function to fetch blog posts
    // const dynamicPages = blogPosts.map(post => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // }));
  
    return [
      ...staticPages,
      // ...dynamicPages, // Uncomment when you have dynamic content
    ];
  }