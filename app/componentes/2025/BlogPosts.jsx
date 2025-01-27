"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaReadme } from "react-icons/fa";
import { IoReader } from "react-icons/io5";
import { useTranslations } from "next-intl";

const BlogPosts = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const t = useTranslations("posts");

  const blogPosts = [
    {
      id: 1,
      title: "Building a Scalable Web Application with Next.js",
      excerpt:
        "Learn how to create a highly performant and scalable web application using the power of Next.js.",
    },
    {
      id: 2,
      title: "Mastering Responsive Design with Tailwind CSS",
      excerpt:
        "Discover the techniques and best practices for building responsive and mobile-friendly websites using Tailwind CSS.",
    },
    {
      id: 3,
      title: "Deploying a Full-Stack Application to Vercel",
      excerpt:
        "Learn how to efficiently deploy your full-stack application to Vercel, ensuring seamless hosting and automatic scaling.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="p-4 overflow-hidden">

      <h1 className="sectionHead uppercase">{t("postsHead")}</h1>

      <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          className="shadow-md rounded-lg overflow-hidden"
          variants={itemVariants}
        >
          <div
            className="flex items-center justify-between px-6 py-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-semibold cust-trans max-sm:text-sm">{post.title}</h3>

            {activeIndex === index ? (
              <FaReadme
                size={30}
                className={`cust-trans animate-fade-up text-primary`}
              />
            ) : (
              <IoReader
                size={30}
                className={`cust-trans animate-fade-up text-primary`}
              />
            )}
          </div>
          {activeIndex === index && (
            <motion.div
              className="px-6 py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="sm:flex sm:items-center">
                <div className="relative h-32 rounded-md flex items-center justify-center bg-gray-300 w-full sm:h-20 sm:w-32 mb-4 sm:mb-0">
                  <span className="text-slate-900">Image</span>
                </div>
                <div>
                  <p className="mb-2 cust-trans animate-fade-up">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/posts`}
                    className="hover:underline cust-trans text-primary"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
    </section>
  );
};

export default BlogPosts;
