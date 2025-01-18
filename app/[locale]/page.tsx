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
import { FaWhatsapp, FaTelegram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Profile() {
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
    { icon: FaWhatsapp, href: "https://wa.me/01001705917", color: "hover:text-green-500" },
    { icon: FaTelegram, href: "https://t.me/hassouna", color: "hover:text-blue-500" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/hassouna", color: "hover:text-blue-700" },
    { icon: FaGithub, href: "https://github.com/hassouna", color: "hover:text-gray-800" }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "مصر، القاهرة" },
    { icon: FaBriefcase, text: "مجموعة منزل التسويق" },
    { icon: FaEnvelope, text: "ibrahim.m.hassouna@gmail.com" },
    { icon: FaPhone, text: "01001705917" }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-6">
        {/* Cover & Profile Section */}
        <motion.div 
          className="relative mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-64 w-full rounded-xl overflow-hidden">
            <Image
              src="/api/placeholder/1200/300"
              alt="Cover"
              width={1200}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
              <Image
                src="/api/placeholder/128/128"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Personal Info */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">إبراهيم حسونة</h1>
          <p className="text-xl text-gray-600 mb-4">مطور واجهات أمامية</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-gray-600"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="text-emerald-500" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-2xl transition-colors duration-300 ${social.color}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-sm mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">نبذة عني</h2>
          <p className="text-gray-600 leading-relaxed">
            مطور واجهات أمامية متخصص في تطوير تطبيقات الويب الحديثة باستخدام React و Next.js.
            لدي خبرة في تصميم وتطوير واجهات المستخدم الجذابة وسهلة الاستخدام.
            أسعى دائماً لتقديم أفضل تجربة مستخدم ممكنة مع الحفاظ على أفضل ممارسات البرمجة.
          </p>
        </motion.div>

        {/* Principles */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">مبادئ العمل</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}