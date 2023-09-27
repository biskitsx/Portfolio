import React from 'react';
import scroll from 'react-scroll';

interface LayoutProps {
    children: React.ReactNode;
}

interface ScrollLinkDTO {
    to: string
    spy: boolean
    smooth: boolean;
    offset: number;
    duration: number;
    className: string;
    children: LayoutProps
}


const ScrollLink = ({ to, children, ...props }: ScrollLinkDTO) => {
    const Link = scroll.Link;
    return <Link to={to} {...props} />;
};

export default ScrollLink;