import React from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  webDevelopmentPortfolio,
  appDevelopmentPortfolio,
  ecommerceWebsitesPortfolio,
  aiProjectsPortfolio,
  chatbotProjectsPortfolio,
  blockchainProjectsPortfolio,
  gameDevelopmentPortfolio,
  recentProjects,
} from "../content/portfolio";
import RoundedHeader from "./RoundedHeader";
import { Link } from "react-router-dom";
const animation = { duration: 60000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const isWeb = page === "web-development";
  const isApp = page === "app-development";
  const isEcommerce = page === "ecommerce";
  const isAI = page === "ai";
  const isChatbot = page === "chatbot";
  const isBlockchain = page === "blockchain";
  const isGames = page === "games";
  const isRecent = page === "recent";

  // Get the appropriate portfolio based on the page
  const getPortfolioData = () => {
    if (isWeb) return webDevelopmentPortfolio;
    if (isApp) return appDevelopmentPortfolio;
    if (isEcommerce) return ecommerceWebsitesPortfolio;
    if (isAI) return aiProjectsPortfolio;
    if (isChatbot) return chatbotProjectsPortfolio;
    if (isBlockchain) return blockchainProjectsPortfolio;
    if (isGames) return gameDevelopmentPortfolio;
    if (isRecent) return recentProjects;

    // Default: show web and app portfolios
    return { web: webDevelopmentPortfolio, app: appDevelopmentPortfolio };
  };

  const portfolioData = getPortfolioData();

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 30 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1024px)": { slides: { perView: 5, spacing: 30 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 30 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1024px)": { slides: { perView: 5, spacing: 30 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="my-[5rem]">
      <div className="">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className=" flex justify-center w-full">
            <RoundedHeader title={"Portfolio"} />
          </div>

          {/* Render single portfolio category */}
          {Array.isArray(portfolioData) && portfolioData.length > 0 && (
            <>
              <h3 className="main-title text-center my-10" data-aos="fade-up">
                {isWeb && "Web Development Projects"}
                {isApp && "Mobile App Projects"}
                {isEcommerce && "E-commerce Projects"}
                {isAI && "AI Projects"}
                {isChatbot && "Chatbot Projects"}
                {isBlockchain && "Blockchain Projects"}
                {isGames && "Game Development Projects"}
                {isRecent && "Recent Projects"}
              </h3>
              <div ref={sliderRef} className="keen-slider">
                {portfolioData.concat(portfolioData).map((obj) => (
                  <a
                    href={obj.link}
                    key={obj.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient object-cover"
                  >
                    <img
                      src={obj.image}
                      alt={obj.title}
                      className="rounded-t-xl hover:scale-105 transition-all duration-300 w-full aspect-square object-cover"
                    />
                    <div className="px-3 mt-3 pb-5">
                      <h4 className="small-heading dark:text-white text-center">
                        {obj.title}
                      </h4>
                      {obj.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                          {obj.category}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Render default web and app portfolios */}
          {portfolioData.web && portfolioData.app && (
            <>
              <h3 className="main-title text-center my-10" data-aos="fade-up">
                Web Projects
              </h3>
              <div ref={sliderRef} className="keen-slider">
                {portfolioData.web.concat(portfolioData.web).map((obj) => (
                  <a
                    href={obj.link}
                    key={obj.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient object-cover"
                  >
                    <img
                      src={obj.image}
                      alt={obj.title}
                      className="rounded-t-xl hover:scale-105 transition-all duration-300 w-full aspect-square object-cover"
                    />
                    <div className="px-3 mt-3 pb-5">
                      <h4 className="small-heading dark:text-white text-center">
                        {obj.title}
                      </h4>
                      {obj.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                          {obj.category}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="main-title text-center my-16" data-aos="fade-up">
                App Projects
              </h3>
              <div ref={sliderRef2} className="keen-slider">
                {portfolioData.app.concat(portfolioData.app).map((obj) => (
                  <a
                    href={obj.link}
                    key={obj.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient"
                  >
                    <img
                      src={obj.image}
                      alt={obj.title}
                      className="rounded-t-xl hover:scale-105 transition-all duration-300 w-full aspect-square object-cover"
                    />
                    <div className="px-3 mt-3 pb-5 max-h-[96px]">
                      <h4 className="font-semibold dark:text-white text-xl text-center">
                        {obj.title}
                      </h4>
                      {obj.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                          {obj.category}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
