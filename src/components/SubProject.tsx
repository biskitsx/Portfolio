import React from 'react'
import { faComment, faCube, faIcons, faLink, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

interface ProjectProps {
    url: string
    image: string
    title: string
    desc: string
    tools: string[]
}

interface SubProjectProps {
    props: ProjectProps
}
function SubProject({ props }: SubProjectProps) {
    const handleLinkClick = () => {
        if (props.url == '#') {
            return
        }

        window.location.href = props.url;
    };

    return (
        <div className="card  shadow-2xl bg-base-100 card-compact hover:scale-105 transition-all cursor-pointer rounded-md" onClick={handleLinkClick}>
            <figure className=''>
                <Image src={props.image} alt="go" className=' h-56 w-full object-cover' width={1000} height={1000} />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {props.title}
                    <a className="badge bg-purple-700 text-white flex gap-1 hover:scale-105" href={props.url}>
                        <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                </h2>
                <p>{props.desc}</p>
                <div className="card-actions justify-end">
                    {props.tools.map((tool: string, index: number) => {
                        return <div className="badge badge-outline" key={index}>{tool}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SubProject