import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"
import '../Styles/navBar.css'

export default function NavBar() {
    const links = [
        { name: "Calculate Emissions", link: "/emissions" },
        { name: "Estimate Sink", link: "/sink" },
        { name: "Visualize", link: "/visualize" },
        { name: "Solutions", link: "/solutions" },
        { name: "About Us", link: "/aboutus" },
    ];

    return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>

        <div className='nav-links'> 
            {links.map((link, index) => (
                <Link key={index} to={link.link}>
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
    )
}

