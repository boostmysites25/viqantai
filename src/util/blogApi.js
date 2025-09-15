// Blog API service functions

const API_BASE_URL = 'https://blogplatform-backend-cloudinary-ten.vercel.app/api'

// Get all published blogs
export const getPublishedBlogs = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/published?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching published blogs:', error);
    
    // Check if it's a network error (API not running)
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      throw new Error('API_CONNECTION_ERROR');
    }
    
    // Check if it's a timeout error
    if (error.name === 'TimeoutError') {
      throw new Error('API_TIMEOUT_ERROR');
    }
    
    throw error;
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    
    // Check if it's a network error (API not running)
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      throw new Error('API_CONNECTION_ERROR');
    }
    
    // Check if it's a timeout error
    if (error.name === 'TimeoutError') {
      throw new Error('API_TIMEOUT_ERROR');
    }
    
    throw error;
  }
};

// Transform API blog data to match component expectations
export const transformBlogData = (apiBlog) => {
  return {
    id: apiBlog._id,
    slug: apiBlog.slug,
    title: apiBlog.title,
    imageUrl: apiBlog.imageUrl,
    subdescription: apiBlog.excerpt,
    description: apiBlog.excerpt,
    readTime: calculateReadTime(apiBlog.content),
    date: formatDate(apiBlog.publishDate),
    content: apiBlog.content,
    author: apiBlog.author?.name || 'Admin',
    category: apiBlog.categoryId?.name || 'General',
    tags: apiBlog.tags || [],
    metaDescription: apiBlog.metaDescription,
    metaKeywords: apiBlog.metaKeywords || [],
    imageAlt: apiBlog.imageAlt || apiBlog.title,
    isFeatured: apiBlog.isFeatured || false
  };
};

// Calculate read time based on content
const calculateReadTime = (content) => {
  if (!content) return '1 min read';
  
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
  
  return `${readTime} min read`;
};

// Format date to readable format
const formatDate = (dateString) => {
  if (!dateString) return new Date().toLocaleDateString();
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
