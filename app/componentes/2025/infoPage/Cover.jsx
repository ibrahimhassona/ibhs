import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
const Cover = ({data,isDarkMode}) => {
  return (
    <motion.div
    className="relative mb-10"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="h-64 w-full rounded-md overflow-hidden animate-fade-up cust-trans  ">
      <Image
        src={data.cover}
        alt="Cover"
        width={1200}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <motion.div
      className="absolute -bottom-0 start-2 transform -translate-x-1/2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div
        className={`relative w-32 h-32 max-md:w-24 max-md:h-24 rounded-full border-4  overflow-hidden  shadow-lg ${
          !isDarkMode ? "border-slate-800" : " border-gray-200"
        }`}
      >
        <Image
          src={data.image}
          alt="Profile"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </motion.div>  )
}

export default Cover