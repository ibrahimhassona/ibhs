"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues, isLoading: false };

const ContactSection = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(initValues);
  const [isSent, setIsSent] = useState(false);
  const { values, isLoading } = state;
  const requiredMessage = isSent ? "" : "Required";

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    // Simulate email sending
    setTimeout(() => {
      setState(initState);
      setIsSent(true);
    }, 1000);
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 container" id="contact">
      <h1 className="font-bold font-roboto text-2xl uppercase max-md:text-xl max-md:text-center">
        Contact Me
      </h1>
      <div className="flex items-start mt-16 max-md:px-[35px] max-md:gap-16 max-md:flex-col justify-between">
        {/* Form */}
        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          className="w-full"
        >
          <h2 className="font-roboto font-semibold text-xl text-center mb-6 capitalize">
            Send me a message
          </h2>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Name Field */}
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent ${
                  touched.name && !values.name ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your name"
              />
              {touched.name && !values.name && (
                <p className="text-red-500 text-sm">{requiredMessage}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent ${
                  touched.email && !values.email ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your email"
              />
              {touched.email && !values.email && (
                <p className="text-red-500 text-sm">{requiredMessage}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label className="block font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent ${
                  touched.subject && !values.subject ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter the subject"
              />
              {touched.subject && !values.subject && (
                <p className="text-red-500 text-sm">{requiredMessage}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent ${
                  touched.message && !values.message ? "border-red-500" : "border-gray-300"
                } rounded`}
                rows={4}
                placeholder="Enter your message"
              />
              {touched.message && !values.message && (
                <p className="text-red-500 text-sm">{requiredMessage}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !values.name || !values.email || !values.subject || !values.message}
              className={`w-full bg-primary text-white p-2 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSent ? "Sent" : isLoading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Success Message */}
          {isSent && (
            <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-md">
              <p>Sending succeeded!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
