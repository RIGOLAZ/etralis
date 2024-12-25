import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="top-menu">
            <div id="trademark">
                <Link to='/accueil'>
                    <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1678701647/Button-ETRALIS_hcxo2a.svg" alt="strobe" />
                <span style={{color:"white", fontWeight:"bold", paddingLeft:"10px", position:"absolute", top:"6px"}}>ETRALIS</span>
            <img className='xmas' src="https://res.cloudinary.com/do8lyndou/image/upload/v1735091749/Chapeau-N%C3%B6el_vbieyp.png" alt="hat" />
                </Link>
            </div>
            <button className="custom-btn btn-11">
                <a href="https://shop.etralis.com" target="_blank" rel='noreferrer'>Go <span id='span1'>to eCommerce</span><span id='span2'>Shop</span><span id='span3'><img src="https://firebasestorage.googleapis.com/v0/b/etralis.appspot.com/o/tofs%2Fcart.svg?alt=media&token=ef30e85c-5d07-4ef3-b2d0-d688dcd43d27" alt="cart" /></span></a>
            </button>
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