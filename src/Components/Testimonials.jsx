import React from "react";
import RoundedHeader from "./RoundedHeader";
import { testimonials } from "../util/constant";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="paddingtop paddingbottom wrapper flex flex-col items-center gap-8 relative z-10">
        <RoundedHeader title={"Testimonials"} />

        <h1
          className="main-title text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500"
          data-aos="fade-up"
        >
          Professionals use to{" "}
          <span className="dark:text-white text-primary">10x</span> their <br />
          <span className="dark:text-white text-primary">Productivity</span>
        </h1>

        <div className="wrapper w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative group h-full rounded-xl p-6 flex flex-col justify-between transition-all duration-500
                  bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-primary
                  overflow-hidden ${index === 1 ? "md:col-span-2" : ""}`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl pointer-events-none transition-all duration-500"></div>

                <div className="relative z-10">
                  <p className="text-lg md:text-xl font-medium text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role || "Verified User"}
                      </p>
                    </div>
                    <StarRating
                      rating={testimonial.rating}
                      className="text-yellow-400"
                      starClassName="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
