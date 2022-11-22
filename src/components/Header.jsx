import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="top-menu">
            <div id="trademark">
                <Link to='/accueil'>
                    <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1668876534/etralis-button_iqara4.svg" alt="strobe" />
                <span style={{color:"white", fontWeight:"bold", paddingLeft:"10px", position:"absolute", top:"6px"}}>ETRALIS</span>
                </Link>
            </div>
            <nav>
                <NavLink to='/accueil' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}> Accueil </NavLink>
                <NavLink to='/services' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}> Services </NavLink>
                <NavLink to='/a-propos' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}> A-propos </NavLink>
            </nav>
            <span id='joindre'>
            <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                <img style={{width:"24px"}} src="https://res.cloudinary.com/do8lyndou/image/upload/v1652839538/whatsapp_button_sjtqz2.svg" alt="whats" /></Link>
            </span>
        </div>
        </>
    );
};

export default Header;