"use client";
import { motion } from "framer-motion";
import { useDarkMode } from "@/lib/DarkModeContext";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getData } from "../../../../lib/getData";
import Loader from "../ui/Loader";
import Cover from "./Cover";
import Informations from "./Informations";
import Aboutme from "./Aboutme";
import Principles from "./Principles";
export default function Profile() {
  const locale = useLocale();
  const [data, setData] = useState<any[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("Personal_information", locale);
      setData(data);
    };

    fetchData();
  }, [locale]);
  console.log("data:", data);
  const { isDarkMode } = useDarkMode();

  if (!data) return <Loader />;
  return (
    <motion.div
      className="min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" mx-auto py-2">
        {/*------------- Cover & Profile Section -------------*/}
        <Cover data={data?.[0]} isDarkMode={isDarkMode} />
        {/*------------- Personal Info -------------*/}
        <Informations data={data?.[0]} />
        {/* ---------- About Me----------  */}
        <Aboutme data={data?.[0]} />
        {/* --------- Principles---------  */}
        <Principles data={data?.[0]} isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
}
