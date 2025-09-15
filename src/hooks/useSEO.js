import { useEffect } from 'react';

// Custom hook for SEO meta tags that works with React 19
export const useSEO = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'article',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  articlePublishedTime,
  articleAuthor,
  articleSection,
  articleTags = []
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl || window.location.href, true);
    updateMetaTag('og:site_name', 'ViQanta', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', twitterTitle || title);
    updateMetaTag('twitter:description', twitterDescription || description);
    updateMetaTag('twitter:image', twitterImage || ogImage);

    // Article specific tags
    updateMetaTag('article:published_time', articlePublishedTime, true);
    updateMetaTag('article:author', articleAuthor, true);
    updateMetaTag('article:section', articleSection, true);

    // Article tags
    articleTags.forEach((tag, index) => {
      updateMetaTag(`article:tag`, tag, true);
    });

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Cleanup function to reset to default values when component unmounts
    return () => {
      // Reset title to default
      document.title = 'ViQanta - AI & Technology Solutions';
      
      // Remove or reset meta tags to default values
      const defaultMetaTags = [
        { name: 'description', content: 'ViQanta delivers innovative AI and technology solutions for enterprises.' },
        { name: 'keywords', content: 'AI, technology, enterprise solutions, digital transformation' },
        { name: 'author', content: 'ViQanta Team' }
      ];

      defaultMetaTags.forEach(({ name, content }) => {
        updateMetaTag(name, content);
      });
    };
  }, [
    title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, ogType,
    twitterCard, twitterTitle, twitterDescription, twitterImage, canonicalUrl,
    articlePublishedTime, articleAuthor, articleSection, articleTags
  ]);
};
