import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652838848/bars_gwupba.svg" alt="open-bar" id="btn"/>
                <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652838929/times_ow8izx.svg" alt="close" id="cancel"/>
            </label>
<div className="sidebar">
    <header>
        <div id="side-login">
            <img id="top-img" src="https://res.cloudinary.com/do8lyndou/image/upload/v1652787741/official-logo-ets_ivl0ag.svg" alt="logo" />
        </div>
    </header>
    <div className="menu">
        <ul>
            {/* <li>
                <Link to="#" className="active">
                    <span>Compte</span>
                </Link>
            </li> */}
            <li>
                <Link to="/partenariat">
                    <span>Partenariat</span>
                </Link>
            </li>
            {/* <li>
                <Link to="/travaux-programmes">
                    <span>Travaux programmés</span>
                </Link>
            </li> */}
            <li>
                <Link to="/foire-aux-questions">
                <span>FAQ</span></Link>
            </li>
            <li>
                <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                    <span>Contact Whatsapp</span>
                </Link>
            </li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Sidebar;