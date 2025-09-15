import React, { useState, useEffect } from "react";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import BlogBody from "../Components/blog/blogBody";
import { getPublishedBlogs, transformBlogData } from "../util/blogApi";
import { LoadingSpinner } from "../Components/Loader";
const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [randomPosts, setRandomPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        setLoading(true);
        const response = await getPublishedBlogs(1, 10);
        
        if (response.success && response.blogs) {
          const allPosts = response.blogs.map(transformBlogData);
          const shuffled = [...allPosts].sort(() => 0.5 - Math.random());
          setRandomPosts(shuffled.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setRandomPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPosts();
  }, []);
  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="text-8xl font-bold text-darkblack dark:text-white"
                >
                  About Us
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  Welcome to ViQantAI, your strategic technology partner. We
                  deliver innovative, scalable solutions in blockchain, AI, app
                  development, and cloud computing, empowering businesses to
                  thrive in the digital era. Our team combines deep technical
                  expertise with creative problem-solving to transform your
                  vision into reality across industries like fintech, gaming,
                  and healthcare.
                </p>
              </div>
              <img data-aos="fade-left" src={aboutusimg} alt="aboutus-img" />
            </div>
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
          <CoreValues />
          <VisionMission />
          <OurStory />
          <UnlockEfficiency />
          <div className="flex justify-center items-center flex-col paddingtop paddingbottom">
            <div
              data-aos="fade-up"
              className="bg-white rounded-full py-2 px-6 shadow-md text-lg font-medium"
            >
              Latest Insights
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 wrapper paddingtop  ">
              {loading ? (
                <div className="col-span-full flex justify-center">
                  <LoadingSpinner />
                </div>
              ) : randomPosts.length > 0 ? (
                randomPosts.map((post, index) => (
                  <BlogBody key={post.id || index} {...post} passkey={true} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-600 dark:text-gray-400">
                    No blog posts available at the moment.
                  </p>
                </div>
              )}
            </div>
          </div>
          <Faq />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
