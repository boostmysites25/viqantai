import React, { useState, useEffect } from "react";
import BlogBody from "../Components/blog/blogBody";
import BlogHeader from "../Components/blog/BlogHeader";
import Faq from "../Components/Faq";
import { getPublishedBlogs, transformBlogData } from "../util/blogApi";
import { LoadingSpinner } from "../Components/Loader";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getPublishedBlogs(1, 20); // Get first 20 blogs
        
        if (response.success && response.blogs) {
          const transformedBlogs = response.blogs.map(transformBlogData);
          setBlogs(transformedBlogs);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="dark:bg-darkblack overflow-x-hidden max-w-screen">
        <BlogHeader />
        <div className="wrapper">
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {error}
              </h2>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    );
  }

  return (
    <div className="dark:bg-darkblack overflow-x-hidden max-w-screen">
      <BlogHeader />
      <div className="wrapper">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 dark:bg-darkblack">
            {blogs.map((post, index) => (
              <BlogBody key={post.id || index} {...post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                No blogs found
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Check back later for new content!
              </p>
            </div>
          </div>
        )}
      </div>
      <Faq />
    </div>
  );
}

export default BlogPage;
