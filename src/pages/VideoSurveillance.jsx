import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { backward } from '../data';

const VideoSurveillance = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='ref'>
            <i onClick={backward} class="fa-solid fa-caret-left fa-xl"></i><h3>VIDEO SURVEILLANCE</h3>
            </div>
            <ComingSoon />
        </main>
            <Footer />
        </>
    );
};

export default VideoSurveillance;