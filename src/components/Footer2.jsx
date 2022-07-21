import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';

const Footer = () => {
    // const {user} = useAuthContext();
    return (
        <footer>
        <div className="contenu-footer">
            <div className="share-zone">
                <div className='sharing'>
                    <Link to="facebook-share">
                    <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652838101/facebook_button_se2ft6.svg" alt="facebook icon" />
                    <span> Suivre sur facebook</span>
                    </Link>
                </div>
                <div className='sharing'>
                    <Link to="facebook-share">
                    <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652838179/linkedinBlue_uoqkqa.svg" alt="facebook icon" />
                    <span> Suivre sur Linkedin</span>
                    </Link>
                </div>
                <div className='sharing'>
                    <Link to="facebook-share">
                    <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652838233/twitter_ripukn.svg" alt="facebook icon" />
                    <span> Suivre sur Tweeter</span>
                    </Link>
                </div>
            </div>
            <div className='mobile'>
                <Link class="btng btn-google" to="" title="Google Play">Google Play</Link>
            </div>
            <div className='partner'>
                <p>Nos partenaires</p>
                <div className='partner_row'>
                    {/* <div>
                        <span><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653758829/panamSolution_qq30c7.jpg" alt="Logo Panam Sol" /> panam Solutions</span>
                    </div> */}
                    {/* <div>
                        <span><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653758829/panamSolution_qq30c7.jpg" alt="Logo Panam Sol" /> panam Solutions</span>
                    </div>
                    <div>
                        <span><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653758829/panamSolution_qq30c7.jpg" alt="Logo Panam Sol" /> panam Solutions</span>
                    </div>
                    <div>
                        <span><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653758829/panamSolution_qq30c7.jpg" alt="Logo Panam Sol" /> panam Solutions</span>
                    </div>
                    <div>
                        <span><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653758829/panamSolution_qq30c7.jpg" alt="Logo Panam Sol" /> panam Solutions</span>
                    </div> */}
                </div>
            </div>
            <div className='footer-end'>
                <div className="footer-menu">
                <div className="bloc1">
                    <ul>
                        <li>
                            <Link to="/"> Acceuil</Link>
                        </li>
                        <li>
                            {/* <Link to="/notifications"> Notif</Link> */}
                            <Link to="/comingsoon"> Notif</Link>
                            
                        </li>
                        <li>
                            <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer"> Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="bloc2">
                    <ul>
                        <li>
                            {/* <Link to="/astuces-et-conseils"> Conseils</Link> */}
                            <Link to="/comingsoon"> Conseils</Link>
                        </li>
                        <li>
                            {/* <Link to="/partenariat"> Partenariat</Link> */}
                            <Link to="/comingsoon"> Partenariat</Link>
                        </li>
                        <li>
                            {/* <Link to="/questions-reponses"> FAQ</Link> */}
                            <Link to="/comingsoon"> FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="bloc3">
                    <ul>
                        <li>
                            {/* <Link to="/travaux-programmes"> Travaux</Link> */}
                            <Link to="/comingsoon"> Travaux</Link>
                        </li>
                        <li>
                            <Link to="/cgu"> CGU</Link>
                        </li>
                    </ul>
                </div>
            </div>
                <p className='copyright'>
                    Made by <span>RIGOLAZ</span> | &copy; 2022
                </p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;