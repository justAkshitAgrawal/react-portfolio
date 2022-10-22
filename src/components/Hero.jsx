import React from "react";
import photo from "../media/aa.png";
import Socials from "./Socials";
import { motion } from "framer-motion";
import "./animate.css";

function Hero() {
  return (
    <div className="flex flex-col pb-10 space-y-14 lg:space-y-64 scrollbar-hide">
      <div className="flex flex-col items-center justify-between px-20 mt-6 font-light lg:mt-40 lg:flex-row">
        <div className="flex flex-col order-2 space-y-4 lg:order-1 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="mt-5 text-5xl tracking-wide lg:mt-0 lg:text-7xl">
              <span className="font-light ">I'm </span>
              <span className="font-semibold ">Akshit Agrawal</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
          >
            <h1 className="text-3xl tracking-wide lg:text-4xl">
              Front-end Developer, Freelancer
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="order-1 lg:order-2 "
        >
          <img
            src={photo}
            alt=""
            className="lg:h-[40vh] rounded-md shadow-xl drop-shadow-xl cursor-pointer hover:scale-110 transition-all"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center px-20 lg:justify-between">
        <Socials />
        <a href="mailto:me@akshitagrawal.dev">
          <h1 className="hidden text-lg lg:inline-block hover:underline hover:decoration-wavy hover:underline-offset-[5px]">
            me@akshitagrawal.dev
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Hero;
