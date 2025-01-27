import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';
import React from 'react'

const Aboutme = ({data}) => {
  const t = useTranslations("Sidebar");

  return (
    <motion.div
    className=" rounded-xl p-6 shadow-sm mb-8"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <h2 className="text-2xl max-sm:text-lg font-bold mb-4 max-sm:text-center">
      {t("aboutme")}
    </h2>
    <p className=" leading-relaxed max-sm:text-center">
      {data.about_me}
    </p>
  </motion.div>
  )
}

export default Aboutme