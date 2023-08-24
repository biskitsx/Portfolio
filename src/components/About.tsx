import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faComment } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Step from './Step'

function About() {
    return (

        <div className=' w-full flex justify-center' id='about'>
            <div className='w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-10 '>
                <div className='grid grid-cols-1  gap-10'>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10'> */}
                    <motion.div className='text-secondary-focus'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5 },
                        }}>
                        <Image src="/kit2.jpeg" alt='connected' width={1000} height={1000} className='overflow-hidden shadow-md rounded-2xl w-80 mx-auto transition-all hover:rotate-3' />
                    </motion.div>

                    <div className='flex flex-col gap-4 font-bold'>
                        <motion.h1 className='text-secondary-focus uppercase'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.5 },
                            }}>
                            About Me
                        </motion.h1>
                        <motion.p className='text-2xl'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.8 },
                            }}>
                            Get to know me 📍
                        </motion.p>
                        <motion.div className='text-xs md:text-sm font-normal text-justify flex flex-col gap-2'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.5 },
                            }}>
                            <p className=''>I started programming for the first time in the <span className='font-medium text-primary'>&quot;Computer and Programming&quot;</span> subject while I was in my first year of electrical engineering (2 years ago). As I continued to study this course, I discovered that I enjoyed solving problems and writing programs. This subject was a turning point in my life, and it made me switch from electrical engineering to <span className='font-medium text-primary'>computer engineering</span> at <span className='font-medium text-primary'>Kasetsart University</span></p>
                            <p>When I first transferred, I had to work hard because I didn&apos;t have the same background as my friends. I started learning C and C++, which helped me learn about data structures and algorithms. Then, I discovered HTML, CSS, and JavaScript, which opened up a whole new world to me and helped me understand how websites work.</p>
                            <p>After that, I kept learning, whether it was frontend or backend, new languages, and I made small projects every time I had free time after class. I also had the opportunity to become a teaching assistant in a developer course for second-year students, which was a great experience. I also worked on a <span className='font-medium text-primary'>GIS (Geographic Information Systems)</span> project application , which was an application that showed the location of activities on my campus using Google Map APIs.</p>
                            <p>Now, I am interested in creating web applications and I am looking for opportunities to work on new projects.</p>
                        </motion.div>
                        <p className='text-xs font-normal text-justify '>
                        </p>
                        <Step />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About