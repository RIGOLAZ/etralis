import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { backward } from '../data';
const Plomberie = () => {
    return (
        <>
        <Header />
        <Sidebar />
    <main>
        <div id="marge"></div>
        <div className='ref'>
        <i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h4>PLOMBERIE</h4>
            </div>
        <ComingSoon />
    </main>
        <Footer />
    </>
    );
};

export default Plomberie;