import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'

const date = new Date();
const year = date.getFullYear();

const InfoAppli = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="info-content">
            <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1678701647/Button-ETRALIS_hcxo2a.svg" alt="strobe" />
                <p>Website version 1.9.1</p>
                <p>Editeur:</p>
                <p>Rigobert EKWA MOUNGUI</p>
                <p>© 2017-{year} ETRALIS</p>
            </div>
        </div>
        <Footer />
        </main>
        </>
    );
};

export default InfoAppli;