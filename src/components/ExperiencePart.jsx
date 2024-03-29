import React from "react";
import { motion } from "framer-motion";

function ExperiencePart({ role, company, date, description }) {
  return (
    <div>
      <div className="flex flex-col space-y-3 transition-all cursor-pointer hover:scale-[1.02] hover:drop-shadow-xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl">
            {role} - {company} ({date})
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[#F8F8F8]/80">{description}</h1>
        </motion.div>
      </div>
      <hr className="my-12" />
    </div>
  );
}

export default ExperiencePart;
