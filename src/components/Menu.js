import React, { useState } from 'react';

const Menu = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="sticky top-20 z-50 bg-violet-600">
            <ul>
                <li className="text-center box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
                    <a
                        href="#section1"
                        className={activeLink === 'section1' ? 'active' : ''}
                        onClick={() => handleLinkClick('section1')}
                    >
                        Section 1
                    </a>
                </li>
                <li className="text-center box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
                    <a
                        href="#section2"
                        className={activeLink === 'section2' ? 'active' : ''}
                        onClick={() => handleLinkClick('section2')}
                    >
                        Section 2
                    </a>
                </li>
                <li className="text-center box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
                    <a
                        href="#section3"
                        className={activeLink === 'section3' ? 'active' : ''}
                        onClick={() => handleLinkClick('section3')}
                    >
                        Section 3
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;