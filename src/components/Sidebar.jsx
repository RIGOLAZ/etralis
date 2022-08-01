import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
    <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabIndex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
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
            <li>
                <Link to="/foire-aux-questions">
                <span>FAQ</span></Link>
            </li>
            <li>
                <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                    <span>Contact Whatsapp</span>
                </Link>
            </li>
            <li className="small">
                <Link to="#" target="_blank" title="Facebook" className="socials-item">
                <i className="fab fa-facebook-f facebook"></i>
                </Link>
                <Link to="#" target="_blank" title="Twitter" className="socials-item">
                    <i className="fab fa-twitter twitter"></i>
                </Link>
                <Link to="#" target="_blank" title="Instagram" className="socials-item">
                    <i className="fab fa-instagram instagram"></i>
                </Link>
                <Link to="#" target="_blank" title="YouTube" className="socials-item">
                    <i className="fab fa-youtube youtube"></i>
                </Link>
                <Link to="#" target="_blank" title="Telegram" className="socials-item">
                    <i className="fab fa-telegram telegram"></i>
                </Link></li>
            </ul>
        </div>
    </div>
    </>
    );
};

export default Sidebar;