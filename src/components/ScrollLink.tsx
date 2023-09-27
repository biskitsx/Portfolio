import React from 'react';
import scroll from 'react-scroll';



interface ScrollLinkDTO {
    to: string
    spy: boolean
    smooth: boolean;
    offset: number;
    duration: number;
    className: string;
}


const ScrollLink = ({ to, ...props }: ScrollLinkDTO) => {
    const Link = scroll.Link;
    return <Link to={to} {...props} />;
};

export default ScrollLink;