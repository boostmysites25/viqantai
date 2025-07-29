import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.viqantai.com';
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/logobg.png`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update link tags
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image || defaultImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image || defaultImage, true);
    updateMetaTag('twitter:url', currentUrl, true);
    
    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[data-seo="structured-data"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'structured-data');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, image, currentUrl, type, structuredData]);

  return null; // This component doesn't render anything
};

// Pre-defined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: 'ViQantAI | Vision Beyond Reality - AI-Powered Solutions & Development',
    description: 'Transform your business with ViQantAI\'s cutting-edge AI solutions. We offer web development, app development, AI consulting, and custom software solutions. Vision Beyond Reality with innovative technology.',
    keywords: 'AI development, artificial intelligence, web development, app development, AI consulting, machine learning, custom software, ViQantAI, AI solutions, technology consulting, digital transformation, AI services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ViQantAI - Home",
      "description": "Transform your business with ViQantAI's cutting-edge AI solutions.",
      "url": "https://www.viqantai.com/",
      "mainEntity": {
        "@type": "Organization",
        "name": "ViQantAI",
        "description": "AI-powered solutions and development services"
      }
    }
  },
  
  about: {
    title: 'About ViQantAI | Our Story, Vision & Mission - AI Innovation Leaders',
    description: 'Learn about ViQantAI\'s journey, vision, and mission. Discover how we\'re revolutionizing businesses with cutting-edge AI solutions and innovative technology services.',
    keywords: 'about ViQantAI, AI company, technology innovation, AI solutions provider, company vision, mission statement, AI development team',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About ViQantAI",
      "description": "Learn about ViQantAI's journey, vision, and mission in AI innovation.",
      "url": "https://www.viqantai.com/about-us"
    }
  },
  
  services: {
    title: 'AI Services | Web Development, App Development & AI Consulting - ViQantAI',
    description: 'Explore ViQantAI\'s comprehensive AI services including web development, mobile app development, AI consulting, machine learning solutions, and custom software development.',
    keywords: 'AI services, web development services, app development, AI consulting, machine learning services, custom software development, technology consulting, digital solutions',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ViQantAI Services",
      "description": "Comprehensive AI and development services",
      "url": "https://www.viqantai.com/services",
      "provider": {
        "@type": "Organization",
        "name": "ViQantAI"
      }
    }
  },
  
  contact: {
    title: 'Contact ViQantAI | Get in Touch for AI Solutions & Development Services',
    description: 'Contact ViQantAI for AI solutions, web development, and app development services. Get a free consultation and transform your business with our innovative technology.',
    keywords: 'contact ViQantAI, AI consultation, get quote, AI services contact, technology consulting, business transformation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact ViQantAI",
      "description": "Get in touch with ViQantAI for AI solutions and development services.",
      "url": "https://www.viqantai.com/contact-us"
    }
  },
  
  portfolio: {
    title: 'ViQantAI Portfolio | AI Projects, Web & App Development Showcase',
    description: 'Explore ViQantAI\'s portfolio showcasing successful AI projects, web development, and mobile app development. See how we\'ve transformed businesses with innovative solutions.',
    keywords: 'ViQantAI portfolio, AI projects, web development portfolio, app development showcase, technology projects, client success stories',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "ViQantAI Portfolio",
      "description": "Showcase of ViQantAI's successful projects and client solutions.",
      "url": "https://www.viqantai.com/portfolio"
    }
  },
  
  blog: {
    title: 'ViQantAI Blog | AI Insights, Technology Trends & Development Tips',
    description: 'Stay updated with ViQantAI\'s blog featuring AI insights, technology trends, development tips, and industry best practices. Learn from our experts.',
    keywords: 'AI blog, technology blog, AI insights, development tips, machine learning articles, tech trends, AI industry news',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "ViQantAI Blog",
      "description": "AI insights, technology trends, and development tips from ViQantAI experts.",
      "url": "https://www.viqantai.com/blog"
    }
  },
  
  webDevelopment: {
    title: 'Professional Web Development Services | Custom Websites - ViQantAI',
    description: 'Get professional web development services from ViQantAI. We create custom, responsive, and AI-powered websites that drive business growth and user engagement.',
    keywords: 'web development, custom websites, responsive design, AI-powered websites, professional web development, website development services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Professional web development services with AI integration.",
      "url": "https://www.viqantai.com/web-development",
      "provider": {
        "@type": "Organization",
        "name": "ViQantAI"
      }
    }
  },
  
  appDevelopment: {
    title: 'Mobile App Development Services | iOS & Android Apps - ViQantAI',
    description: 'Expert mobile app development services for iOS and Android. ViQantAI creates innovative, AI-integrated mobile applications that enhance user experience and business efficiency.',
    keywords: 'mobile app development, iOS app development, Android app development, AI mobile apps, custom mobile applications, app development services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development Services",
      "description": "Expert mobile app development for iOS and Android with AI integration.",
      "url": "https://www.viqantai.com/app-development",
      "provider": {
        "@type": "Organization",
        "name": "ViQantAI"
      }
    }
  }
};

export default SEOHead;