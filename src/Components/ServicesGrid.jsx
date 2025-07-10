import React, { useState } from "react";
import { services } from "../util/constant";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();

  const navigateTo = (link) => {
    navigate(`/services/${link}`);
  };

  return (
    <section>
      <div className="wrapper paddingtop paddingbottom">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                // data-aos="fade-up"
                className={`relative aspect-square h-full overflow-hidden rounded-xl border transition-all duration-500 
                  ${isDarkMode ? "border-gray-700" : "border-gray-200"}
                  group hover:border-transparent
                  ${hoveredIndex === index ? "z-10" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigateTo(service.link)}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${
                    isDarkMode
                      ? "from-primary/20 via-primary/40 to-primary/60"
                      : "from-primary/10 via-primary/30 to-primary/50"
                  }`}
                />

                {/* Animated background shine */}
                <div className={`absolute inset-0 overflow-hidden`}>
                  <div
                    className={`absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        : "bg-gradient-to-r from-transparent via-black/5 to-transparent"
                    }
                    ${
                      hoveredIndex === index
                        ? "animate-[shine_1.5s_linear]"
                        : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`relative flex flex-col justify-evenly h-full p-6 transition-all duration-300
                  ${isDarkMode ? "text-white" : "text-darkblack"}
                  group-hover:text-white`}
                >
                  {/* Icon with bounce effect */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-darkblack/30 text-primary"
                        : "bg-gray-100 text-primary"
                    }
                    group-hover:bg-white group-hover:text-primary group-hover:scale-110`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title with slide-up effect */}
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 transform group-hover:-translate-y-1">
                    {service.title}
                  </h3>

                  {/* Description with fade-in effect */}
                  <p
                    className={`text-sm transition-all duration-500 
                    ${isDarkMode ? "text-gray-300" : "text-gray-600"}
                    group-hover:text-white/90 group-hover:translate-y-0 opacity-100`}
                  >
                    {service.description}
                  </p>

                  {/* Hidden "Learn more" that appears on hover */}
                  <span
                    className={`absolute bottom-3 right-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isDarkMode ? "text-white" : "text-white"}
                    transform group-hover:translate-x-0`}
                  >
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
