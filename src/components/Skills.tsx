import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCode, faPalette, faDatabase, faCheck, faCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
const frontEnd = ["ReactJS", "NextJS", "Tailwind"]
const backEnd = ["NodeJS", "TypeScript", "JavaScript", "MongoDB", "Prisma", "PosgreSQL", "MySQL", "GO", "Docker"]
import { logo, softSkills } from '@/data/skills'

function Skills() {
    return (
        <div className='bg-base-200 w-full flex justify-center items-center md:h-screen' id='skills'>
            <div className='w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-10  relative'>
                <div className='font-bold flex gap-3 flex-col'>
                    <motion.h1 className='text-secondary-focus uppercase'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5 },
                        }}>
                        Skills
                    </motion.h1>
                    <motion.p className='text-2xl'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.8 },
                        }}>
                        Hard skills 🧑🏻‍💻
                    </motion.p>
                </div>

                <div className='flex justify-around flex-wrap gap-3'>
                    {logo.map((item, index) => {
                        return (

                            <a className='rounded-full shadow-md bg-white p-2 hover:scale-105 transition' key={index} href={item.link}>
                                <motion.div
                                    initial={{ scale: 0.1, opacity: 1 }}
                                    whileInView={{
                                        scale: 1,
                                        opacity: 1,
                                        transition: { duration: 0.5 },
                                    }}>

                                    <Image src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${item.src}`} alt={item.title} width={30} height={30} className='' />
                                </motion.div>
                            </a>
                        )
                    })}
                </div>
                <motion.p className='text-2xl font-bold md:mt-20'
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.8 },
                    }}>
                    Soft skills 🧑🏻
                </motion.p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {softSkills.map((item, index) => {
                        return <div className='bg-base-100 p-2 rounded-md shadow-md font-normal flex justify-center items-center' key={index}>
                            <motion.p
                                className='text-center'
                                initial={{ scale: 0.1, opacity: 1 }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1,
                                    transition: { duration: 0.5 },
                                }}>
                                {item}
                            </motion.p>
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}

export default Skills