import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rubrique from '../components/Rubrique';
import Comment from '../components/Comment'
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='branding'>
                <div className='titre-home'>
                    <h1>Techniciens professionnels en urgence 24/7</h1>
                </div><br />
                <div className='enBref'>
                    <p>Techniciens fiables et de qualité en local<br />
                    <a href="tel:677077030"><img id='tel' src="https://www.1ere-position.fr/wp-content/themes/m1press-theme/static/img/phone-new-blanc.svg" alt="phone" /> +237 677077030</a><br /><br />
                    <a aria-label="Chat on WhatsApp" href="//wa.me/237677077030" target="_blank" rel="noopener noreferrer"> <img alt="ChatOnWhatsApp" src="https://res.cloudinary.com/do8lyndou/image/upload/v1664041525/WhatsAppButtonGreenSmall_hjj8wm.svg" /> </a></p>
                </div>
            </div>
            <Rubrique/>
            <div>
                <p><strong>Bonus</strong>: Tout client pourra bénéficier de l'un de nos polos personalisés à la fin de chaque chantier.</p>
            </div>
            <Comment />
        </main>
        <Footer />
        </>
    );
};

export default Home;