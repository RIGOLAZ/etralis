import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar3 from '../components/sidebar3';

const Contacts = () => {
    return (
        <div>
            <Header />
            <Sidebar3 />
        <main>
            <div id="marge"></div>
            <ComingSoon />
        </main>
            <Footer />
        </div>
    );
};

export default Contacts;