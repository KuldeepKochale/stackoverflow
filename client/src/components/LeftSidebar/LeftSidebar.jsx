import React from 'react'
import './LeftSidebar.css'
import { Link, NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'
import { useState,useEffect } from 'react'

const LeftSidebar = () => {

    const [activeLink, setActiveLink] = useState(0);


    const handleActive = (ind) => {
        console.log(ind)
        setActiveLink(ind)
    }
    
    

    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <Link onClick={() => handleActive(0)} to='/' className={`side-nav-links ${activeLink===0 ? 'active' : ''}`} >
                    <p>Home</p>
                </Link>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <Link onClick={() => handleActive(1)} to='/Questions' className={`side-nav-links ${activeLink===1 ? 'active' : ''}`}>
                        <img src={Globe} alt="Globe" height='17' width='17' />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </Link>
                    <Link onClick={() => handleActive(2)} to='/Tags' className={`side-nav-links ${activeLink===2 ? 'active' : ''}`} style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </Link>
                    <Link onClick={() => handleActive(3)} to='/Users' className={`side-nav-links ${activeLink===3 ? 'active' : ''}`} style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar