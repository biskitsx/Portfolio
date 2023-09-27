import React from 'react'
import Link from 'next/link'
import scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBolt, faCube, faHippo, faBars } from '@fortawesome/free-solid-svg-icons'
import Swap from './Swap'
import ScrollLink from './ScrollLink'

function Navbar() {
    return (
        <div className='w-full flex justify-between font-semibold px-10 bg-base-100 py-6 items-center shadow-md  top-0 transition-transform sticky lg:fixed z-50' >
            <Link href="#" className=' cursor-pointer'>
                <h2 className='font-bold text-lg '>
                    SUPHAKIT <FontAwesomeIcon icon={faHippo} className='text-accent' />
                </h2>
            </Link>

            <nav className='hidden sm:flex gap-4 font-semibold'>
                <ScrollLink to="home" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>Home</ScrollLink>
                <ScrollLink to="skills" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>Skills</ScrollLink>
                <ScrollLink to="about" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>About</ScrollLink>
                <ScrollLink to="project" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>Project</ScrollLink>
                <ScrollLink to="blog" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>Blog</ScrollLink>
                <ScrollLink to="contact" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105'>Contact</ScrollLink>
                <Swap />

            </nav>
            <nav className='sm:hidden gap-4 font-semibold flex items-center'>
                <Swap />
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="text-xl"><FontAwesomeIcon icon={faBars} className='cursor-pointer' /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <ScrollLink to="home" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer p-1 hover:bg-base-200 rounded-md'>Home</ScrollLink>
                        <ScrollLink to="skills" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:bg-base-200 rounded-md p-1'>Skills</ScrollLink>
                        <ScrollLink to="about" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:bg-base-200 rounded-md p-1'>About</ScrollLink>
                        <ScrollLink to="project" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:bg-base-200 rounded-md p-1'>Project</ScrollLink>
                        <ScrollLink to="blog" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:bg-base-200 rounded-md p-1'>Blog</ScrollLink>
                        <ScrollLink to="contact" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:bg-base-200 rounded-md p-1'>Contact</ScrollLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar