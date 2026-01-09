import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faComment } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Step from "./Step";
import { MotionFaded } from "./Motion/MotionFaded";

function About() {
  return (
    <div className=" w-full flex justify-center" id="about">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-10 ">
        <div className="grid grid-cols-1  gap-10">
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10'> */}
          <MotionFaded className="text-secondary-focus flex flex-col items-center">
            <div className="relative">
              <Image
                src="/baac.JPG"
                alt="connected"
                width={1000}
                height={1000}
                className="overflow-hidden shadow-md rounded-md w-80 mx-auto transition-all hover:rotate-3"
              />
              {/* <Image src="/z.JPG" alt='connected' width={3000} height={1000} className='overflow-hidden shadow-md rounded-md mx-auto transition-all hover:rotate-3' /> */}
              <Image
                alt="sticker"
                src="/sticker1.png"
                width={1000}
                height={1000}
                className="w-20 -bottom-8 -left-8 sm:w-28 absolute sm:-bottom-12 sm:-left-12 bg-secondary rounded-full shadow-lg animate-spin-slow"
              />
            </div>
          </MotionFaded>

          <div className="flex flex-col gap-4 font-bold">
            <motion.h1
              className="text-secondary-focus uppercase"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              About Me
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
              Get to know me 📍
            </motion.p>
            <motion.div
              className="text-xs md:text-sm font-normal text-justify flex flex-col gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              <p>
                {" "}
                I graduated with a degree in Computer Engineering from Kasetsart
                University, where I developed a strong passion for software development. 
                Throughout my academic journey, I built several projects encompassing both 
                frontend and backend development using technologies such as Go, Node.js, 
                React, and more. I firmly believe that intelligence and expertise are 
                cultivated through dedication and continuous learning, and I am eager to 
                leverage my skills to create innovative, user-friendly software solutions.{" "}
              </p>{" "}
              <p>
                {" "}
                In 2024, I completed a 7-month internship at Appsynth as a Full
                Stack Developer. During this time, I worked on internal projects
                using Next.js and Golang, contributing to an employee engagement
                system and a time-tracking platform. I practiced Agile
                methodologies, collaborated closely with my team, and led
                knowledge-sharing sessions on topics like Feature Flags and
                OWASP. This experience not only strengthened my technical skills
                but also enhanced my teamwork and communication abilities.{" "}
              </p>
              <p>
                {" "}
                Today, I&apos;m Software Engineer in Architecture team with hands-on experience in cloud-native systems, 
                GitOps, and microservices architecture. Experienced in migrating 
                on-premise services to Kubernetes, refactoring monolithic systems 
                into microservices, and implementing CI/CD pipelines for production 
                environments.Interested in building scalable and reliable systems.{" "}
              </p>
            </motion.div>
            <p className="text-xs font-normal text-justify "></p>
            <Step />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
