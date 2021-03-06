import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar3 = () => {
    return (
        <>
    <div id="nav-container">
        <div class="bg"></div>
        <div class="button" tabindex="0">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
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
            <li class="small">
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

export default Sidebar3;