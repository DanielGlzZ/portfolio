import React, { useState } from 'react';
import '../styles/styles.scss';

const Menu = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#section1"
                        className={activeLink === 'section1' ? 'active' : ''}
                        onClick={() => handleLinkClick('section1')}
                    >
                        Section 1
                    </a>
                </li>
                <li>
                    <a
                        href="#section2"
                        className={activeLink === 'section2' ? 'active' : ''}
                        onClick={() => handleLinkClick('section2')}
                    >
                        Section 2
                    </a>
                </li>
                <li>
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