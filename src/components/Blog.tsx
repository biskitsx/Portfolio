import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { blogDetail } from "@/data/blog";
import SubBlog from "./SubBlog";

function Blog() {
  return (
    <div className=" w-full flex justify-center" id="blog">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-8">
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
            Blog
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
            My blog on Medium 🌈
            {/* <FontAwesomeIcon icon={faMedium} className='hover:text-black hover:scale-110 ' /> */}
          </motion.p>
          <Image
            alt="sticker"
            src="/sticker2.png"
            width={1000}
            height={1000}
            className="absolute w-24 sm:w-40 -bottom-10 right-0 -rotate-12"
          />
        </div>
        <div className="flex flex-col gap-10">
          {blogDetail.map((blog, index) => {
            return (
              <SubBlog
                description={blog.description}
                title={blog.title}
                image={blog.image}
                link={blog.link}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
