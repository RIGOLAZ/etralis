import React from 'react';
import AstucesConseils from '../components/AstucesConseils';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar3 from '../components/sidebar3';
import { backward } from '../data';

const Electricite = () => {
    return (
        <>
            <Header />
            <Sidebar3 />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} class="fa-solid fa-caret-left fa-xl"></i><h3>ELECTRICITE</h3>
            </div>
            <ComingSoon />
            <AstucesConseils />
        </main>
            <Footer />
        </>
    );
};

export default Electricite;