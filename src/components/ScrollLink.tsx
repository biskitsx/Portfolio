import React from 'react';
import scroll from 'react-scroll';

interface ScrollLinkDTO {
    to: string
    props: [x: string]
}
const ScrollLink = ({ to, ...props }: ScrollLinkDTO) => {
    const Link = scroll.Link;
    return <Link to={to} {...props} />;
};

export default ScrollLink;