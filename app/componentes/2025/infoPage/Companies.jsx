"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

export const Companies = ({ data }) => {
  const t = useTranslations("Companies");
  const companies = data?.companies || [];

  if (!companies || companies.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="py-8 px-4 sm:px-10  mb-12 backdrop-blur"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <motion.h2
        className="text-xl font-bold mb-8 max-sm:text-center "
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {t("title")}
      </motion.h2>

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical Timeline Border */}
        <div className="hidden sm:block absolute ltr:left-[52px] rtl:right-[52px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-500 to-transparent" />

        {companies.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-10 last:mb-0"
          >
            <div className="flex items-start gap-6 max-md:gap-4 max-md:flex-col max-md:text-center bg-gray-50 dark:bg-[#171717] rounded-2xl border border-white/30 shadow-sm px-5 py-6 sm:px-7 sm:py-7">
              {/* Company Icon/Logo Section */}
              <div className="relative flex-shrink-0 flex items-center justify-center max-md:mx-auto">
                <div className="w-20 h-20 max-md:w-16 max-md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-lg flex items-center justify-center relative overflow-hidden">
                  <FaBuilding className="text-white text-3xl max-md:text-2xl relative z-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full" />
                </div>

             </div>

              {/* Content Section */}
              <div className="flex-1 min-w-0 w-full">
                <div className="flex items-start justify-between gap-4 flex-wrap max-md:flex-col max-md:items-center">
                  {/* Company Info */}
                  <div className="flex-1 min-w-0 max-md:w-full">
                    <h3 className="text-lg max-md:text-lg font-semibold mb-1">
                      {item.company}
                    </h3>
                    
                    <p className="text-lg max-md:text-base font-medium mb-2">
                      {item.role}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm mb-4 max-md:justify-center">
                      <FaMapMarkerAlt className="text-primary flex-shrink-0" size={14} />
                      <span className="font-medium tracking-wide">{item.location}</span>
                    </div>

                    <p className="leading-relaxed text-base max-md:text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Date Badge */}
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-md flex-shrink-0 max-md:mx-auto"
                    whileHover={undefined}
                  >
                    <FaCalendarAlt size={14} />
                    <span className="text-sm font-semibold whitespace-nowrap">{item.period}</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Connector line between items */}
            {index < companies.length - 1 && (
              <div className="ltr:ml-12 rtl:mr-12 mt-6 mb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-700 to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Companies;