"use client";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";
const HomeSection = () => {
  return (
    <section
      className="pt-5 h-[100vh] container grid grid-cols-2 gap-5 items-center justify-between max-sm:h-auto max-sm:my-16 max-sm:flex max-sm:flex-col-reverse"
      id="about"
    >
      {/* content */}
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className=" flex flex-col  max-sm:mx-2 max-sm:items-center max-sm:mt-5"
      >
        <h1 className="font-bold text-4xl uppercase font-roboto  max-sm:text-2xl">
          <span className="text-sky">Ib</span>rahim{" "}
          <span className="text-sky">H</span>a
          <span className="text-sky">s</span>souna
        </h1>
        <h2 className="font-bold text-2xl  font-roboto text-gray-700  max-sm:text-xl">
          Front-End Developer <b className="">|</b> Next.js
        </h2>
        <ul className="mt-3 text-gray-500 max-sm:w-[90%]">
          Hello and welcome to my website! I am a frontend developer, and I'm
          delighted that you've visited my site to explore my work.
          <li className="ml-5 mt-3">
            The website showcases my programming skills, which you can learn
            more about on the "Show my Skills" page. Feel free to navigate to it
            at the bottom.
          </li>
          <li className="ml-5 mt-3">Explore my programming projects.</li>
          <li className="ml-5 mt-3">Different ways to connect with me.</li>
        </ul>
        <motion.div
          variants={FadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-5"
        >
          <CustomBtn
            to="/skills"
            style="bg-sky text-white px-2 py-1 rounded-sm hover:bg-black w-fit "
            content="Show my Skills"
          />
        </motion.div>
      </motion.div>
      {/* Image */}
      <motion.div
        variants={FadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="relative w-full"
      >
        <div className=" w-[80%] mx-auto items-center flex flex-col pt-5 bg-[#00000082] rounded">
          <Image
            src="/ibrahim.png"
            alt="Ibrahim Hassouna"
            width={200}
            height={200}
            className="relative z-10"
          />
          <div className=" absolute cloud-2 h-full w-[90%] top-0 right-auto bg-cover bg-center text-xl opacity-100"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
