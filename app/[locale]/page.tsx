// import ContactSection from "../componentes/ContactSection";
// import HomeSection from "../componentes/HomeSection";
// import ProjectsSection from "../componentes/ProjectsSection";

// export default async function Home() {
//   return (
//     <main className="w-full max-w-[1400px] mx-auto overflow-hidden  ">
//       <HomeSection />
//       <ProjectsSection />
//       <ContactSection />
//     </main>
//   );
// }

"use client";
import { motion } from "framer-motion";
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
import Image from "next/image";
import { useDarkMode } from "@/lib/DarkModeContext";

export default function Profile() {
  const { isDarkMode } = useDarkMode();
  const principles = [
    "دراسة المشروع",
    "دراسة التصميم",
    "كتابة المهام",
    "تنفيذ التصميم بكود نظيف",
    "اختبار الواجهة",
    "تحسين SEO",
    "الإطلاق",
    "الصيانة",
    "التواصل الفعال",
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/01001705917",
      color: "hover:text-green-500",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/hassouna",
      color: "hover:text-blue-500",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/hassouna",
      color: "hover:text-blue-700",
    },
    {
      icon: FaGithub,
      href: "https://github.com/hassouna",
      color: "hover:text-gray-800",
    },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "مصر، القاهرة" },
    { icon: FaMapMarkerAlt, text: "مصر، كفرالشيخ" },
    { icon: FaBriefcase, text: "مجموعة منزل التسويق" },
    { icon: FaEnvelope, text: "ibrahim.m.hassouna@gmail.com" },
    { icon: FaPhone, text: "01001705917" },
  ];

  return (
    <motion.div
      className="min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" mx-auto py-2">
        {/*------------- Cover & Profile Section -------------*/}
        <motion.div
          className="relative mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-64 w-full rounded-md overflow-hidden">
            <Image
              src="/cover.jpg"
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
                src="/me.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        {/*------------- End Cover & Profile Section -------------*/}
        {/*------------- Personal Info -------------*/}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl max-md:text-xl font-bold mb-2 ">
              إبراهيم حسونة
            </h1>
            <p className="text-xl max-md:text-sm  mb-4 font-semibold">{`مطور مواقع الكترونية (Front End)`}</p>
          </div>
          {/* ------ Contact Info ------ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center text-center gap-4 mb-6 m-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 m-auto "
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="text-primary" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center  gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-2xl transition-colors duration-300 ${social.color}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                // whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ---------- About Me----------  */}
        <motion.div
          className=" rounded-xl p-6 shadow-sm mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl max-sm:text-lg font-bold mb-4 max-sm:text-center">
            نبذة عني
          </h2>
          <p className=" leading-relaxed max-sm:text-center">
            مطور واجهات أمامية متخصص في تطوير تطبيقات الويب الحديثة باستخدام
            React و Next.js. لدي خبرة في تصميم وتطوير واجهات المستخدم الجذابة
            وسهلة الاستخدام. أسعى دائماً لتقديم أفضل تجربة مستخدم ممكنة مع
            الحفاظ على أفضل ممارسات البرمجة.
          </p>
        </motion.div>

        {/* --------- Principles---------  */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center max-sm:text-lg">
            مبادئ العمل
          </h2>
          <div className="grid  max-sm:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
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
      </div>
    </motion.div>
  );
}
