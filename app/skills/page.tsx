"use client";
import Image from "next/image";
import { technologies } from "../data";

// react icons
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { skillsProp } from "../type";
import CustomBtn from "../componentes/CustomBtn";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";
// Skills Data
const skills: skillsProp = {
  soft: {
    proplem_solving:
      "Troubleshoot and enhance frontend functionality to deliver an intuitive and visually appealing user interface.",
    critical_thinking:
      "Utilizing analytical and logical reasoning to evaluate, solve problems, and make informed decisions in various situations.",
    adaptability:
      "The ability to quickly adjust to new technologies and methodologies, ensuring seamless integration into evolving front-end development practices.",
    collaboration:
      " Effective teamwork and communication skills to foster a cohesive and productive environment, contributing to successful project outcomes in front-end development.",
    attention_to_detai:
      "Meticulous focus on precision in coding and design elements to deliver polished and error-free user interfaces in front-end development.",
    communication:
      "Clear and concise conveyance of technical concepts and ideas, facilitating effective collaboration and mutual understanding among cross-functional teams in front-end development.",
  },
  techSkils: technologies,
};

const skillsIcons = [
  <SiNextdotjs />,
  <FaReact />,
  <SiTailwindcss />,
  <SiTypescript />,
  <IoLogoJavascript />,
  <FaCss3Alt />,
  <FaHtml5 />,
  <FaBootstrap />,
  <SiStrapi />,
  <SiRedux />,
  <CiServer />,
];
const Skills = () => {
  return (
    <div className="container overflow-hidden font-roboto py-20">
      <div>
        {/* How I am  */}

        <div className="flex justify-between items-center max-md:flex-col-reverse ">
          {/* content */}
          <motion.div
            variants={FadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" flex-col   w-full max-md:text-center max-md:py-4 max-md:px-[35px]"
          >
            <h1 className="font-semibold text-xl uppercase">
              Ibrahim Hassouna
            </h1>
            <h2 className="font-semibold text-lg">Front-End Developer</h2>
            <p className="mt-2 text-sky text-start">
              I'am Ibrahim Mohamed Hassouna <br /> Graduated with a very good
              grade in the field of management information systems in 2019 from
              Tanta University.
            </p>
            <h2 className="font-semibold text-lg mt-2">Languages </h2>
            <p className=" text-sky text-start">
              Arabic: the language of my homeland
              <br />
              English: written and spoken
            </p>
          </motion.div>
          {/* photo */}
          <motion.div
            variants={FadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }} className="relative w-full">
            <div className=" w-[80%] mx-auto items-center flex flex-col pt-5 bg-[#00000082] rounded">
              <Image
                src="/ibrahim-2.png"
                alt="Ibrahim Hassouna"
                width={200}
                height={200}
                className="relative z-10"
              />
              <div className=" absolute cloud h-full w-[90%] top-0 right-auto bg-cover bg-center text-xl opacity-100"></div>
            </div>
          </motion.div>
        </div>
        {/* Soft Skills */}
        <div className="pt-10">
          <h1 className="font-semibold text-xl text-center uppercase">
            Soft Skills
          </h1>
          <div className="grid grid-cols-3 justify-center items-center gap-4 max-sm:flex flex-col max-sm:px-[50px] my-10">
            {Object.entries(skills.soft).map(([key, desc],index) => (
              <motion.div
              variants={FadeIn("", index/10)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
                key={key}
                className="flex hover:shadow-md links cursor-text flex-col items-center text-center px-[5px] py-[10px] rounded h-full gap-1 justify-center border border-black"
              >
                <h2 className="capitalize font-semibold ">
                  {key.replaceAll("_", " ")}
                </h2>
                <p className="text-[14px] leading-4 text-sky ">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Technical skills */}
        <div className="pt-10">
          <h1 className="font-semibold text-xl text-center uppercase">
            Technica Skills
          </h1>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-2 px-10 lg:px-50 my-10">
            {Object.entries(skills.techSkils).map(([key, desc], index) => (
              <motion.div
              variants={FadeIn("", index/10)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
                key={key}
                className="bg-sky rounded-sm mytransition py-3 cursor-pointer hover:bg-black  text-white flex flex-col justify-center items-center gap-2"
              >
                <h1 className="text-2xl">{skillsIcons[index]}</h1>
                <h2 className="text-md uppercase ">{desc}</h2>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Explore my projects */}
        <motion.div 
         variants={FadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.4 }}
        className="flex justify-center items-center my-5">
          <CustomBtn
            style="border border-black px-3 py-2 rounded-sm capitalize hover:bg-black/70 hover:text-white "
            content="Expolore my projects"
            to="/#projects"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
