import React from 'react'
import { motion } from 'framer-motion';
import {
    FaWhatsapp,
    FaTelegram,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaBriefcase,
    FaEnvelope,
    FaPhone,
  } from "react-icons/fa";
const Informations = ({data}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
          },
        },
      };
    
      const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hover: {
          scale: 1.05,
          transition: { duration: 0.2 },
        },
      };
    
      const contactItems = [
        {
          icon: FaMapMarkerAlt,
          text: data.addresses[0],
          link: `https://maps.google.com/maps?q=${encodeURIComponent(
            data.addresses[0]
          )}`,
        },
        {
          icon: FaMapMarkerAlt,
          text: data.addresses[1],
          link: `https://maps.google.com/maps?q=${encodeURIComponent(
            data.addresses[1]
          )}`,
        },
        {
          icon: FaBriefcase,
          text: data.current_company,
          link: `https://www.google.com/search?q=${encodeURIComponent(
            data.current_company
          )}`,
        },
        {
          icon: FaEnvelope,
          text: data.email,
          link: `mailto:${data.email}`,
        },
        {
          icon: FaPhone,
          text: data.phone_numbers[0],
          link: `tel:${data.phone_numbers[0]}`,
        },
      ];
    
      const getIcon = (platform) => {
        switch (platform) {
          case "LinkedIn":
            return { icon: FaLinkedin };
          case "Telegram":
            return { icon: FaTelegram };
          case "WhatsApp":
            return {
              icon: FaWhatsapp,
            };
          case "GitHub":
            return { icon: FaGithub };
          default:
            return null;
        }
      };
  return (
    <motion.div
    className="text-center mb-8"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
  >
    <div className="mb-6">
      <h1 className="text-3xl max-md:text-xl font-bold mb-2 ">
        {data.name}
      </h1>
      <p className="text-xl max-md:text-sm  mb-4 font-semibold">
        {data.job_title}
      </p>
    </div>
    {/* ------ Contact Info ------ */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center text-center gap-4 mb-6 m-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {contactItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          className="flex items-center gap-1 m-auto hover:text-primary transition-colors duration-300"
        >
          <item.icon className="text-primary mr-2" />
          {item.text}
        </motion.a>
      ))}
    </motion.div>

    <div className="flex justify-center gap-6">
      {data.social_links.map((social, index) => {
        const IconData = getIcon(social.platform);
        if (!IconData) return null;

        const { icon: Icon } = IconData;

        return (
          <motion.a
            key={index}
            href={social.url}
            className={`text-2xl transition-colors duration-300 `}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  </motion.div>
  )
}

export default Informations