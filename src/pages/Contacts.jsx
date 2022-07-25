import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';

const Contacts = () => {
    return (
        <div>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <ComingSoon />
        </main>
            <Footer />
        </div>
    );
};

export default Contacts;