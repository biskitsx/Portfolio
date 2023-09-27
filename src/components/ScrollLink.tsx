import React from 'react';
import scroll from 'react-scroll';

interface ScrollLinkDTO {
    to: string
    spy: boolean
    smooth: boolean;
    offset: number;
    duration: number;
    className: string;
    children: React.ReactNode
}


const ScrollLink = ({ to, children, ...props }: ScrollLinkDTO) => {
    const Link = scroll.Link;
    return <Link to={to} {...props}>{children}</Link>
};

export default ScrollLink;