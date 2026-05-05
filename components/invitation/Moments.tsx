"use client";

import { motion } from "framer-motion";

export default function Moments() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      <img
        src="/images/DSC02573.jpg"
        alt="Yasmin y George"
        className="object-cover w-full"
      />
      <img
        src="/images/DSC02650.jpg"
        alt="Momento 2"
        className="object-cover w-full"
      />
      <img
        src="/images/DSC02547.jpg"
        alt="Momento 3"
        className="object-cover w-full"
      />
    </motion.div>
  );
}
