import React from "react";
import { motion } from "framer-motion";

function Skill({ skill, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="flex items-center space-x-5 transition-all cursor-pointer hover:scale-110"
    >
      {icon}
      <h1 className="text-3xl font-light">{skill}</h1>
    </motion.div>
  );
}

export default Skill;
