import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';

const Chaudronnerie = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/c_scale,w_1000/v1681717518/Chaudronnier_edl6or.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>CHAUDRONNERIE</h2>
			</div>
		</div>
            <ComingSoon />
            <Comment />
        </main>
            <Footer />
        </>
    );
};

export default Chaudronnerie;