import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'


const InfoAppli = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="info-content">
                <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1668876534/etralis-button_iqara4.svg" alt="logo RIGOLAZ" />
                <p>Website version 1.9.1</p>
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