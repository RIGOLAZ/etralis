import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
const Plomberie = () => {
    return (
        <>
        <Header />
        <Sidebar />
    <main>
        <div id="marge"></div>
        <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1670596140/plomberie_uva9p4.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h1>PLOMBERIE DOMESTIQUE ET INDUSTRIELLE</h1>
			</div>
		</div>
        <ComingSoon />
        <Comment />
    </main>
        <Footer />
    </>
    );
};

export default Plomberie;