import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';

const OffreEmploi = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h3>OFFRE D'EMPLOI</h3>
            </div>
            <ComingSoon />
        </main>
            <Footer />
        </>
    );
};

export default OffreEmploi;