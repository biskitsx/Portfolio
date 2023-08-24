import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCube, faIcons, faLink, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';
import SubProject from './SubProject';
import { projectDetail } from '@/data/project';

function Project() {
    return (
        <div className=' w-full flex justify-center bg-base-200' id='project'>
            <div className='w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-8'>
                <div className='font-bold flex gap-3 flex-col'>
                    <motion.h1 className='text-secondary-focus uppercase'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5 },
                        }}>
                        Project
                    </motion.h1>
                    <motion.p className='text-2xl'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.8 },
                        }}>
                        Some of my project on my github 🚀
                    </motion.p>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    {projectDetail.map((project, index) =>
                        <SubProject props={project} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project