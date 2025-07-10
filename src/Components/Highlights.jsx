import { useEffect, useRef } from "react";
import { highlights } from "../util/constant";
import RoundedHeader from "./RoundedHeader";
import { Link } from "react-router-dom";
const Highlights = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.classList.add("show");
        }, 100 * index);
      }
    });
  }, []);

  return (
    <section className="z-30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-400/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-500/10 dark:bg-gray-400/10 filter blur-3xl"></div>
      </div>

      <div className="wrapper paddingtop paddingbottom relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-5 fade-in-left">
            <RoundedHeader title={"Highlights"} bg={true} />

            <h1 className="main-title leading-tight fade-in gradient-text">
              Revolutionizing AI with{" "}
              <span className=" bg-clip-text">Quantum Intelligence</span>
            </h1>

            <p className="desc fade-in-delay-1">
              From local startups to interplanetary enterprises, GodverseAI is
              your ultimate gateway to advanced AI solutions. We merge
              artificial intelligence, quantum computing, and cosmic
              consciousness to drive unparalleled business growth and digital
              evolution.
            </p>

            <Link
              to="/contact-us"
              // onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white w-fit group relative overflow-hidden fade-in-delay-2 hover-scale"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-yellow-600/20 dark:from-blue-400/20 dark:to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="col-span-2 grid md:grid-cols-2 gap-4">
            {highlights.map((obj, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`highlight-card floating-${
                  index % 3
                } group relative backdrop-blur-sm bg-white/5 dark:bg-white/5 flex flex-col gap-3 p-6 border border-gray-200/30 dark:border-primary/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)] opacity-0 translate-y-8`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-yellow-500/0 dark:from-blue-400/0 dark:via-blue-400/5 dark:to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <img
                    src={obj.icon || "/placeholder.svg"}
                    alt={obj.title}
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-icon"
                  />
                </div>

                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="small-heading text-gray-800 dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                    {obj.title}
                  </h3>

                  <p className="small-desc text-gray-600 dark:text-gray-300 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                    {obj.description}
                  </p>
                </div>

                <div className="absolute right-0 bottom-0 w-4 h-4 border-r border-b border-blue-400/30 dark:border-yellow-400/30 rounded-br-xl transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-blue-400/50 dark:group-hover:border-yellow-400/50"></div>

                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/10 to-yellow-600/10 rounded-xl blur-sm transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
