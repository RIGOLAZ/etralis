import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer1 = () => {
    return (
      <footer className="flex-rw">
      <div className='block1'>
      <ul className="footer-list-top">
        <li><h4 className="footer-list-header">SERVICES</h4></li>
        <li><NavLink to='/electricite' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Electricité</NavLink></li>
        <li><NavLink to='/informatique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Informatique</NavLink></li>
        <li><NavLink to='/electromecanique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Electro mécanique</NavLink></li>
        <li><NavLink to='/froid-et-climatisation' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Froid & Climatisation</NavLink></li>
        <li><NavLink to='/plomberie' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Plomberie</NavLink></li>
        <li><NavLink to='/courant-faible' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Courant faible</NavLink></li>
        <li><NavLink to='/chaudronnerie' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Chaudronnerie</NavLink></li>
        <li><NavLink to='/btp' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">BTP-Urbanisme</NavLink></li>
        <li><NavLink to='/avionique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Avionique</NavLink></li>
      </ul>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">CONTACT RAPIDE</h4></li>
        <li className='generic-anchor footer-list-anchor' itemProp="significantLink">Téléphone:</li>
        <li><a href="tel:677077030" className="generic-anchor footer-list-anchor" itemProp="significantLink">677077030</a></li>
        <li><a aria-label="Chat on WhatsApp" target="_blank" href="//wa.me/237677077030" rel="noopener noreferrer" ><img alt="ChatOnWhatsApp" src="https://res.cloudinary.com/do8lyndou/image/upload/v1664041525/WhatsAppButtonGreenSmall_hjj8wm.svg" /></a></li>
        <li className='generic-anchor footer-list-anchor' itemProp="significantLink">Email:</li>
        <li><a href='mailto:support@etralis.com' itemProp="significantLink" className="generic-anchor footer-list-anchor">support@etralis.com</a></li>
      </ul>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">A PROPOS</h4></li>
        <li><NavLink to='/a-propos' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Qui sommes-nous</NavLink></li>
        <li><NavLink to='/info-appli' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Info appli</NavLink></li>
        <li><NavLink to='/partenariat' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Devenez partenaire</NavLink></li>
        <li><NavLink to='/offre-d-emploi' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink" >Offre d'emploi</NavLink></li>
      </ul>
      <ul className="footer-list-top">
        <li id='help'>
          <h4 className="footer-list-header">AIDE</h4></li>
        <li><NavLink to='/foire-aux-questions' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">FAQ</NavLink></li>
        <li><NavLink to='/localisation' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Localisation</NavLink></li>
      </ul>
      </div>
        <div className='block2'>
          <div>
          <Link to="#" target="_blank" title='Android app'><img id='badge' src="https://res.cloudinary.com/do8lyndou/image/upload/v1661732284/playstore_ypwutl.svg" alt="Google" /></Link>
          </div>
          <div>
            <Link to="#" target="_blank" title='apple app'><img id='badge' src="https://res.cloudinary.com/do8lyndou/image/upload/v1661732284/applestore_tbhf2i.svg"alt="Apple" /></Link>
          </div>
        </div>
      <section className="footer-social-section flex-rw">
          <span className="footer-social-overlap footer-social-connect">
          SUIVEZ <span className="footer-social-small">-</span> NOUS
          </span>
          <span className="footer-social-overlap footer-social-icons-wrapper">
          <a href="https://www.facebook.com/rigolaz" target="_blank" title="Facebook" className="socials-item" rel="noreferrer">
            <i className="fab fa-facebook-f facebook"></i>
          </a>
          <a href="https://twitter.com/etralis0" target="_blank" title="Twitter" className="socials-item" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/etralis" target="_blank" title="Linkedin" className="socials-item" rel="noreferrer">
          <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCTS7-okshzwjoxV5xsogziQ" target="_blank" title="YouTube" className="socials-item" rel="noreferrer">
            <i className="fab fa-youtube youtube"></i>
          </a>
          <a href="https://www.instagram.com/rigolaz" target="_blank" title="Instagram" className="socials-item" rel="noreferrer">
            <i><svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" class="sol-illustration"><g id="logo.instagram"><g id="logo-instagram"><path id="Vector" d="M21.6 2.09998H10.4C5.79997 2.09998 2.09998 5.79997 2.09998 10.4V21.6C2.09998 26.2 5.79997 29.9 10.4 29.9H21.6C26.2 29.9 29.9 26.2 29.9 21.6V10.4C29.9 5.79997 26.2 2.09998 21.6 2.09998ZM27.1 21.6C27.1 24.6 24.7 27.1 21.6 27.1H10.4C7.39997 27.1 4.89998 24.7 4.89998 21.6V10.4C4.89998 7.39997 7.29997 4.89998 10.4 4.89998H21.6C24.6 4.89998 27.1 7.29997 27.1 10.4V21.6Z" fill="url(#paint0_linear_4223_6534)"></path><path id="Vector_2" d="M16 8.80005C12 8.80005 8.79999 12 8.79999 16C8.79999 20 12 23.2 16 23.2C20 23.2 23.2 20 23.2 16C23.2 12 20 8.80005 16 8.80005ZM16 20.4C13.6 20.4 11.6 18.4 11.6 16C11.6 13.6 13.6 11.6 16 11.6C18.4 11.6 20.4 13.6 20.4 16C20.4 18.4 18.4 20.4 16 20.4Z" fill="url(#paint1_linear_4223_6534)"></path><path id="Vector_3" d="M23.2 10.6C24.1389 10.6 24.9 9.8389 24.9 8.90001C24.9 7.96113 24.1389 7.20001 23.2 7.20001C22.2611 7.20001 21.5 7.96113 21.5 8.90001C21.5 9.8389 22.2611 10.6 23.2 10.6Z" fill="url(#paint2_linear_4223_6534)"></path></g></g><defs><linearGradient id="paint0_linear_4223_6534" x1="16" y1="29.7825" x2="16" y2="2.35218" gradientUnits="userSpaceOnUse"><stop stop-color="#E09B3D"></stop><stop offset="0.3" stop-color="#C74C4D"></stop><stop offset="0.6" stop-color="#C21975"></stop><stop offset="1" stop-color="#7024C4"></stop></linearGradient><linearGradient id="paint1_linear_4223_6534" x1="16" y1="29.7826" x2="16" y2="2.35225" gradientUnits="userSpaceOnUse"><stop stop-color="#E09B3D"></stop><stop offset="0.3" stop-color="#C74C4D"></stop><stop offset="0.6" stop-color="#C21975"></stop><stop offset="1" stop-color="#7024C4"></stop></linearGradient><linearGradient id="paint2_linear_4223_6534" x1="23.1849" y1="29.7825" x2="23.1849" y2="2.35221" gradientUnits="userSpaceOnUse"><stop stop-color="#E09B3D"></stop><stop offset="0.3" stop-color="#C74C4D"></stop><stop offset="0.6" stop-color="#C21975"></stop><stop offset="1" stop-color="#7024C4"></stop></linearGradient></defs></svg></i>
          </a>
          </span>
      </section>
      <section className="footer-bottom-section flex-rw">
    <div className="footer-bottom-wrapper">   
    <i className="fa fa-copyright">
    </i> 2022 ETRALIS <address className="footer-address">DOUALA, CAMEROUN</address><span className="footer-bottom-rights"> - Tous droits réservés - </span>
        </div>
        <div className="footer-bottom-wrapper">
        <Link to="/termes" className="generic-anchor" rel="nofollow">Termes</Link> | <Link to="/confidentialite" className="generic-anchor" rel="nofollow">Confidentialité</Link>
          </div>
      </section>
    </footer>
    );
};

export default Footer1;