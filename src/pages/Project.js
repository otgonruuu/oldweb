import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import projects from "../data/project";
import { motion } from "framer-motion";
const Project = () => {
  const img = {
    width: "500px",
    height: "200px",
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className=" py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              className=' m-6 w-auto h-auto rounded-2xl overflow-hidden shadow-2xl p-10 bg-gradient-to-b from-teal-400
] via-green-400 to-green-500"'
              key={index}
            >
              <LazyLoadImage
                className="shadow-teal-400 shadow-2xl rounded-xl"
                style={img}
                src={project.image}
                alt={project.title}
              />
              <h3 className="font-bold text-xl  text-white">{project.title}</h3>
              <p className="text-teal-100 text-base mb-2">
                {project.description}
              </p>
              {project.tools.map((disc, index) => (
                <span
                  className="inline-block bg-teal-400 rounded-full p-2 text-sm font-semibold text-teal-100 m-2"
                  key={index}
                >
                  {disc}
                </span>
              ))}
              <div className="flex space-x-2">
                <button
                  className="text-teal-100 p-2 bg-transparent border-2 border-teal-300  text-lg rounded-lg transition-colors duration-700 transform hover:bg-teal-400 hover:text-gray-100 focus:border-4 focus:border-teal-300"
                  onClick={() => window.open(project.github)}
                >
                  эх код
                </button>
                <button
                  className="text-teal-100 bg-transparent border-2 border-teal-400 text-lg rounded-lg transition-colors duration-700 transform hover:bg-teal-300 hover:text-gray-100 focus:border-4 focus:border-teal-400"
                  onClick={() => window.open(project.link)}
                >
                  хурдан харах
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Project;
