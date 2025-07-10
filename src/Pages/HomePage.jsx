import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
// import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
const HomePage = () => {
  // const { theme } = useTheme();
  // const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img data-aos="fade-right" src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to ViQantAI
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              At ViQantAI, we’re your strategic technology partner, delivering
              innovative and scalable solutions that drive digital
              transformation. Specializing in blockchain, AI, app development,
              cloud computing, and more, we turn your vision into reality with
              tailored, high-quality solutions. Whether you’re a startup or an
              enterprise, our team empowers your business to thrive in the
              digital landscape across industries like fintech, gaming, and
              healthcare.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Your Partner for Transformative Technology Solutions
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            Unlock your business’s potential with ViQantAI’s innovative
            services. From AI and blockchain to cloud computing and app
            development, we deliver tailored, scalable solutions that drive
            growth and impact across industries.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        {/* <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        /> */}
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
