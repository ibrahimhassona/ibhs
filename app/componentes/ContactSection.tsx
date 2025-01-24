"use client";

import { sendEmail } from "@/lib/mail";

import React, { useState } from "react";
import SocialConatct from "./SocialConatct";
import { stateType } from "../[locale]/type";
import { motion } from "framer-motion";
import { FadeIn } from "../[locale]/variants";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues, isLoading: false };

const ContactSection = () => {
  const [state, setState] = useState<stateType>(initState);
  const [touched, setTouched] = useState(initValues);
  const [isSent, setIsSent] = useState(false);
  const { values, isLoading } = state;
  let requierd = isSent ? "" : "Requierd";
  // change handle
  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  //  blur handle
  const handleBlur = ({ target }: any) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  //Submit handle
  const HandleSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    sendEmail(values);
    setTimeout(() => {
      setState(initState);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section className="py-20 container " id="contact">
      <h1 className="font-bold font-roboto text-2xl uppercase max-md:text-xl max-md:text-center">
        Contact Me{" "}
      </h1>

    </section>
  );
};

export default ContactSection;
