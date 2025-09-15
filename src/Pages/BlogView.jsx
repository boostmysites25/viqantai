import React, { useState, useEffect } from "react";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import { useTheme } from "../Context/ThemeContext";
import ViewBlogContent from "../Components/blog/viewBlogContent";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug, getPublishedBlogs, transformBlogData } from "../util/blogApi";
import BlogBody from "../Components/blog/blogBody";
import Faq from "../Components/Faq";
import RoundedHeader from "../Components/RoundedHeader";
import { LoadingSpinner } from "../Components/Loader";
import { useSEO } from "../hooks/useSEO";

function BlogView() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // SEO hook for dynamic meta tags
  useSEO({
    title: blog ? `${blog.title} | ViQanta Blog` : 'ViQanta Blog',
    description: blog?.metaDescription || blog?.subdescription || 'Read the latest insights on AI and technology from ViQanta.',
    keywords: blog?.metaKeywords?.join(', ') || blog?.tags?.join(', ') || 'AI, technology, enterprise solutions',
    author: blog?.author || 'ViQanta Team',
    ogTitle: blog?.title,
    ogDescription: blog?.metaDescription || blog?.subdescription,
    ogImage: blog?.imageUrl,
    ogUrl: window.location.href,
    ogType: 'article',
    twitterTitle: blog?.title,
    twitterDescription: blog?.metaDescription || blog?.subdescription,
    twitterImage: blog?.imageUrl,
    canonicalUrl: window.location.href,
    articlePublishedTime: blog?.date,
    articleAuthor: blog?.author,
    articleSection: blog?.category,
    articleTags: blog?.tags || []
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // Fetch the specific blog by slug/id
        const response = await getBlogBySlug(id);
        
        if (response.success && response.blog) {
          const transformedBlog = transformBlogData(response.blog);
          setBlog(transformedBlog);
          
          // Fetch related posts (excluding current blog)
          const relatedResponse = await getPublishedBlogs(1, 10);
          if (relatedResponse.success && relatedResponse.blogs) {
            const allPosts = relatedResponse.blogs.map(transformBlogData);
            const filteredPosts = allPosts.filter((post) => post.id !== transformedBlog.id);
            const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
            setRelatedPosts(shuffled.slice(0, 3));
          }
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !blog) {
    return (
      <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {error || 'Blog not found'}
            </h2>
            <button 
              onClick={() => navigate('/blog')} 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } md:-top-[109rem] -top-[172rem]  blur-3xl left-0 w-full h-full bg-footerBackground  `}
      />
      <div className="relative max-w-3xl mx-auto px-4  pt-[7rem]   overflow-hidden ">
        <ViewBlogHeader
          image={blog.imageUrl}
          title={blog.title}
          readTime={blog.readTime}
          date={blog.date}
        />
        <ViewBlogContent content={blog.content} />
      </div>
      <div className="wrapper paddingtop">
        <div className="flex justify-center items-center flex-col">
          <RoundedHeader title={"Recent Posts"} />
          <h1 data-aos="fade-up" className="main-title my-3">
            Related Posts
          </h1>
          {relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 dark:bg-darkblack">
              {relatedPosts.map((post, index) => (
                <BlogBody key={post.id || index} {...post} passkey={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">
                No related posts found.
              </p>
            </div>
          )}
        </div>
        <Faq />
      </div>
    </div>
  );
}

export default BlogView;