import React from 'react';
import Sidebar3 from '../components/sidebar3';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';

const Avionique = () => {
    return (
        <>
            <Header />
            <Sidebar3 />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} class="fa-solid fa-caret-left fa-xl"></i><h3>AVIONIQUE</h3>
            </div>
            <ComingSoon />
        </main>
            <Footer />
        </>
    );
};

export default Avionique;