import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from './Sidebar';

const TrxPgr = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <h3 className='ref'>TRAVAUX PROGRAMMES ENEO</h3>
            <ComingSoon />
        </main>
            <Footer />
        </>
    );
};

export default TrxPgr;