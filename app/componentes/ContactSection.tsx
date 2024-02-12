"use client";

import { sendEmail } from "@/lib/mail";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SocialConatct from "./SocialConatct";
import { stateType } from "../type";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

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
      <div className="flex items-start mt-16 max-md:px-[35px] max-md:gap-16 max-md:flex-col justify-between">
        {/* Form */}
        <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full"
        >
          <h2 className="font-roboto font-semibold text-xl text-center mb-6 capitalize">
            Send me message
          </h2>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.name != "" && !values.name}
            colorScheme="blue"
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              // errorBorderColor={isSent ? 'green':'red'}
              errorBorderColor={isSent ? "green.300" : "red.300"}
            />
            <FormErrorMessage>{requierd}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.email != "" && !values.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorBorderColor={isSent ? "green.300" : "red.300"}
            />
            <FormErrorMessage>{requierd}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.subject != "" && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              errorBorderColor={isSent ? "green.300" : "red.300"}
            />
            <FormErrorMessage>{requierd}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.message != "" && !values.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              errorBorderColor={isSent ? "green.300" : "red.300"}
            />
            <FormErrorMessage>{requierd}</FormErrorMessage>
          </FormControl>
          {/* Button */}
          <Button
            colorScheme="gray"
            isLoading={isLoading}
            isDisabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={HandleSubmit}
            textColor={isSent ? "green.300" : ""}
          >
            {isSent ? "Sent" : "Send"}
          </Button>
          {isSent ? (
            <Alert mt={4} status="success">
              <AlertIcon />
              <AlertTitle mr={2}>Sending succeeded!</AlertTitle>
            </Alert>
          ) : (
            ""
          )}
        </motion.div>
        {/* Social Media */}
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full"
        >
          <h2 className="font-roboto font-semibold text-xl text-center mb-6">
            Social Media
          </h2>
          <SocialConatct />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
