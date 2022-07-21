import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar3 from '../components/sidebar3';
import {backward} from '../data'

const Informatique = () => {
    return (
        <>
            <Header />
            <Sidebar3 />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} class="fa-solid fa-caret-left fa-xl"></i><h3>INFORMATIQUE</h3>
            </div>
            <ComingSoon />
        </main>
            <Footer />
        </>
    );
};

export default Informatique;