import { motion } from "framer-motion";
import SubProject from "./SubProject";
import { projects } from "@/data/project";
import clsx from "clsx";
function Project() {
  return (
    <div className=" w-full flex justify-center bg-base-200" id="project">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-300 flex flex-col gap-8">
        <div className="font-bold flex gap-3 flex-col relative">
          <motion.h1
            className="text-secondary-focus uppercase"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            Project
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            Some of my project on my github 🚀
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => {
            const widerIndex = [0, 3, 8];
            let isSpan = false;
            if (widerIndex.includes(index)) {
              isSpan = true;
            }
            return (
              <SubProject
                props={project}
                key={index}
                className={clsx("", {
                  "sm:col-span-2 lg:col-span-2": isSpan, // Larger item in every fifth position
                  // "lg:row-span-2": index % 6 === 0, // Larger height for every seventh item
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
