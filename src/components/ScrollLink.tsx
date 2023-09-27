import React from 'react';
import scroll from 'react-scroll';

const ScrollLink = ({ to, ...props }) => {
    const Link = scroll.Link;
    return <Link to={to} {...props} />;
};

export default ScrollLink;
