import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Homex from '@/components/Homex'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Navbar />
            <Homex />
            <Skills />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}
