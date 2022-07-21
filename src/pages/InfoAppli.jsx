import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar3 from '../components/sidebar3';


const InfoAppli = () => {
    return (
        <>
            <Header />
            <Sidebar3 />
        <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="info-content">
                <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1652787741/official-logo-ets_ivl0ag.svg" alt="logo RIGOLAZ" />
                <p>Application version 1.0.1</p>
                <p>Editeur:</p>
                <p>Rigobert EKWA MOUNGUI</p>
                <p>© 2017-2022 ETRALIS</p>
            </div>
        </div>
        <Footer />
        </main>
        </>
    );
};

export default InfoAppli;