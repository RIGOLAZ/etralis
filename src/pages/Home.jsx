import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Rubrique from '../components/Rubrique';
import Sidebar3 from '../components/sidebar3';
import Comment from '../components/Comment'

const Home = () => {
    return (
        <>
            <Header />
            <Sidebar3 />
        <main>
            <div id="marge"></div>
            <div className='branding'>
                <div className='titre-home'>
                    <h1>Techniciens professionnels en urgence 24/7</h1>
                </div><br />
                <div className='enBref'>
                    <p>Techniciens fiables et de qualité en local<br />
                    Nous appeler au: <a href="tel:677077030"> 677 07 70 30</a> / <a href="tel:694088330">694 08 83 30</a></p>
                    <p>Ou nous conctacter sur whatsapp  <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                    <img style={{width:"24px"}} src="https://res.cloudinary.com/do8lyndou/image/upload/v1652839538/whatsapp_button_sjtqz2.svg" alt="message" /></Link></p>
                </div>
            </div>
            <Rubrique/>
            <Comment />
        </main>
            <Footer />
        </>
    );
};

export default Home;