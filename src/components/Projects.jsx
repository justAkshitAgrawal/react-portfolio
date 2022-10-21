import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-20 mt-20"
      id="projects"
    >
      <h1 className="text-4xl font-semibold ">Projects</h1>
      <div className="grid max-w-screen-xl pb-20 pt-14 lg:grid-cols-3 gap-x-60 gap-y-10">
        <Project
          img="https://i.ibb.co/pjCz09w/image.png"
          title="React Portfolio"
          desc="A portfolio website built using ReactJS and TailwindCSS."
          link="https://akshitagrawal.dev"
        />
        <Project
          img="https://i.ibb.co/Ykn9KtQ/image.png"
          title="Netflix Clone"
          desc="A Netflix clone built using ReactJS."
          link="https://netflix-clone-mu-lyart.vercel.app/"
        />
        <Project
          img="https://i.ibb.co/nfwNGXy/image.png"
          title="Todo App"
          desc="A basic todo app built using ReactJS."
          link="https://todoist-woad.vercel.app/"
        />
      </div>
    </motion.div>
  );
}

export default Projects;
