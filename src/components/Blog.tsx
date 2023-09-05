import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

function Blog() {
    return (
        <div className=' w-full flex justify-center' id='project'>
            <div className='w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-8'>
                <div className='font-bold flex gap-3 flex-col'>
                    <motion.h1 className='text-secondary-focus uppercase'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5 },
                        }}>
                        Blog
                    </motion.h1>
                    <motion.p className='text-2xl'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.8 },
                        }}>
                        My blog on Medium  🌈
                        {/* <FontAwesomeIcon icon={faMedium} className='hover:text-black hover:scale-110 ' /> */}
                    </motion.p>
                </div>
                <div>
                    <div className="card card-compact card-side bg-base-100 shadow-xl relative">
                        <figure className=''>
                            <Image src="/gomedium.webp" alt="Shoes" width={300} height={300} className='h-full ' />
                        </figure>
                        <div className="card-body ">
                            <a className="card-title hover:underline cursor-pointer" href='https://medium.com/@kitsugarr/%E0%B8%9E%E0%B8%B2%E0%B8%97%E0%B8%B3-rest-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2-go-fiber-37cf95fde4ed'>ตอนที่ 1 เริ่มต้นเขียน API ด้วยภาษา Go (Fiber) 🔥</a>
                            <p>ในบทความนีเราจะมาหัดเขียน API แบบง่ายๆ กัน โดยเหมาะกับคนที่มีพื้นฐานในการเขียนโปรแกรมเบื้องต้น หากใครไม่มีก็สามารถลองทำดูคร่าวๆตามไปได้ครับ 😄...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog