import React, { useState } from "react";
import { faqs } from "../util/constant";
import { FilePlus, Plus } from "lucide-react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [isOpen, setIsOpen] = useState("");
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  const renderAnswer = (answer) => {
    const points = answer.split("•").filter((point) => point.trim() !== "");
    if (points.length > 1) {
      return (
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-700 dark:text-gray-300"
            >
              {point.trim()}
            </motion.li>
          ))}
        </ul>
      );
    }
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-700 dark:text-gray-300"
      >
        {answer}
      </motion.p>
    );
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section>
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"FAQs"} bg={true} />
            <h1
              className="main-title leading-tight gradient-text"
              data-aos="fade-right"
            >
              Frequently Asked Questions
            </h1>
            <p className=" font-text dark:text-white" data-aos="fade-right">
              Explore ViQantAI’s FAQ section to learn how our innovative
              technology solutions in blockchain, app development, AI, and cloud
              computing can empower your business to achieve digital
              transformation and success.
            </p>
            <button
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white w-fit"
              data-aos="fade-right"
            >
              Get Started
            </button>
          </div>
          {/* Right Column - FAQs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-2 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white p-6 rounded-xl focus:outline-none transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-primary"
                  onClick={() =>
                    setIsOpen((prev) => (prev === index ? null : index))
                  }
                >
                  <span className="text-left font-medium text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 ml-4"
                  >
                    <Plus className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: { duration: 0.4, ease: "easeOut" },
                          opacity: { duration: 0.3, delay: 0.1 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: { duration: 0.3, ease: "easeIn" },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gradient-to-r from-yellow-50 to-gray-50 dark:from-slate-700 dark:to-slate-600 rounded-b-xl border-x border-b border-gray-200 dark:border-slate-600">
                        {renderAnswer(faq.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
