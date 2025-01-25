"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IoIosSend } from "react-icons/io";
import { BsFillSendCheckFill } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";
import { sendEmail } from "@/lib/mail";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues, isLoading: false };

const ContactSection = () => {
  const t = useTranslations("contact");
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(initValues);
  const [isSent, setIsSent] = useState(false);
  const { values, isLoading } = state;
  const requiredMessage = isSent ? "" : t("required");

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleBlur = ({
    target,
  }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      await sendEmail(values);
      setState(initState);
      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
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
    <section className="max-w-[600px] m-auto" id="contact">
      <h1 className="uppercase sectionHead">{t("title")}</h1>
      <div className="flex items-start mt-16 max-md:px-[35px] max-md:gap-16 max-md:flex-col justify-between">
        {/* Form */}
        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          className="w-full"
        >
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Name Field */}
            <div>
              <label className="label">{t("name")}</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent max-sm:text-sm ${
                  touched.name && !values.name
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
                placeholder={t("placeholderName")}
              />
              {touched.name && !values.name && (
                <p className="text-red-500 text-xs animate-fade-up cust-trans">
                  {requiredMessage}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="label">{t("email")}</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent max-sm:text-sm ${
                  touched.email && !values.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
                placeholder={t("placeholderEmail")}
              />
              {touched.email && !values.email && (
                <p className="text-red-500 text-xs animate-fade-up cust-trans">
                  {requiredMessage}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label className="label">{t("subject")}</label>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent max-sm:text-sm ${
                  touched.subject && !values.subject
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
                placeholder={t("placeholderSubject")}
              />
              {touched.subject && !values.subject && (
                <p className="text-red-500 text-xs animate-fade-up cust-trans">
                  {requiredMessage}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="label">{t("message")}</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border bg-transparent max-sm:text-sm ${
                  touched.message && !values.message
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
                rows={4}
                placeholder={t("placeholderMessage")}
              />
              {touched.message && !values.message && (
                <p className="text-red-500 text-xs animate-fade-up cust-trans">
                  {requiredMessage}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isLoading ||
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              className={`items-center flex mx-auto bg-primary w-fit p-2 rounded ${
                isLoading ? "bg-yellow-600 cursor-not-allowed" : ""
              }`}
            >
              {isSent ? (
                <span className="flex w-full items-center gap-2">
                  {t("sent")}
                  <BsFillSendCheckFill size={20} />
                </span>
              ) : isLoading ? (
                <span className="flex w-full items-center gap-2">
                  {t("sending")}
                  <ImSpinner3 size={20} className="animate-spin" />
                </span>
              ) : (
                <span className="flex w-full items-center gap-2">
                  {t("send")}
                  <IoIosSend size={20} />
                </span>
              )}
            </button>
          </form>

          {/* Success Message */}
          {isSent && (
            <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-md">
              <p>{t("sent")}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
