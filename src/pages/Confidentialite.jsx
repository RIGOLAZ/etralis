import React from 'react';
import AstucesConseils from '../components/AstucesConseils';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { backward } from '../data';

const Confidentialite = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h3>CONFIDENTIALITE</h3>
            </div>
            <ComingSoon />
            <AstucesConseils />
        </main>
            <Footer />
        </>
    );
};

export default Confidentialite;