import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Principles = ({ data, isDarkMode }) => {
  const t = useTranslations("Sidebar");

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <h2 className="text-2xl max-sm:text-lg font-bold mb-4 max-sm:text-center">
        {t("steps_work")}
      </h2>
      <div className="grid  max-sm:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-4">
        {data.work_principles.map((principle, index) => (
          <motion.div
            key={index}
            className={`
      p-2 
      rounded-md 
      cust-trans
      ease-in-out
      ${
        !isDarkMode
          ? "bg-gray-800/70 border-gray-700 "
          : "bg-white/70 border-gray-100 "
      }
      border 
      hover:border-opacity-50
    `}
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5 + index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className={`
        w-6 h-6 
        flex items-center justify-center 
        rounded-full 
         bg-emerald-200 text-emerald-700 text-xs font-bold 
        
      `}
              >
                {index + 1}
              </div>
              <p
                className={`
        text-sm sm:text-base flex-1
        ${!isDarkMode ? "text-gray-200" : "text-gray-800"}
      `}
              >
                {principle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Principles;
