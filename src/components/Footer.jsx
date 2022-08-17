import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import googleBadge from "../css/bg-img/playstore.svg";
import appleBadge from "../css/bg-img/applestore.svg";

const Footer1 = () => {
    return (
      <footer className="flex-rw">
      <div className='block1'>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">SERVICES</h4></li>
        <li><NavLink to='/electricite' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Electricité</NavLink></li>
        <li><NavLink to='/informatique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Informatique</NavLink></li>
        <li><NavLink to='/electromecanique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Electro mécanique</NavLink></li>
        {/* <li><NavLink to='/domotique' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Domotique</NavLink></li> */}
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
        <li><a href="tel:694088330" className="generic-anchor footer-list-anchor" itemProp="significantLink">694088330</a></li>
        <li><Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
        <img style={{width:"24px"}} src="https://res.cloudinary.com/do8lyndou/image/upload/v1652839538/whatsapp_button_sjtqz2.svg" alt="message" /></Link></li>
        <li className='generic-anchor footer-list-anchor' itemProp="significantLink">Email:</li>
        <li><a href='mailto:support@etralis.com' itemProp="significantLink" className="generic-anchor footer-list-anchor">support@etralis.com</a></li>
      </ul>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">A PROPOS</h4></li>
        <li><NavLink to='/qui-sommes-nous' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Qui sommes-nous</NavLink></li>
        <li><NavLink to='/info-appli' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Info appli</NavLink></li>
        <li><NavLink to='/partenariat' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Devenez partenaire</NavLink></li>
        {/* <li><NavLink to='/travaux-programmes' className={({isActive}) =>(isActive ? 'nav-serv-active' : 'footer-list-anchor')} itemProp="significantLink">Travaux programmés ENEO</NavLink></li> */}
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
          <Link to="#" target="_blank" title='Android app'><img id='badge' src={googleBadge} alt="Google" /></Link>
          </div>
          <div>
            <Link to="#" target="_blank" title='apple app'><img id='badge' src={appleBadge} alt="Apple" /></Link>
          </div>
        </div>
      <section className="footer-social-section flex-rw">
          <span className="footer-social-overlap footer-social-connect">
          SUIVEZ <span className="footer-social-small">-</span> NOUS
          </span>
          <span className="footer-social-overlap footer-social-icons-wrapper">
          <Link to="#" target="_blank" title="Facebook" className="socials-item">
            <i className="fab fa-facebook-f facebook"></i>
          </Link>
          <Link to="#" target="_blank" title="Twitter" className="socials-item">
            <i className="fab fa-twitter twitter"></i>
          </Link>
          <Link to="#" target="_blank" title="Instagram" className="socials-item">
          <i className="fab fa-linkedin linkedin"></i>
          </Link>
          <Link to="#" target="_blank" title="YouTube" className="socials-item">
            <i className="fab fa-youtube youtube"></i>
          </Link>
          <Link to="#" target="_blank" title="Telegram" className="socials-item">
            <i className="fab fa-telegram telegram"></i>
          </Link>
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