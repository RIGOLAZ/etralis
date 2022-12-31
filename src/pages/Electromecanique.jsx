import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';

const Electromecanique = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1659862487/%C3%A9lectrom%C3%A9canique_emdoxj.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h1>ELECTROMECANIQUE</h1>
			</div>
		</div>
            <ComingSoon />
            <Comment />
        </main>
            <Footer />
        </>
    );
};

export default Electromecanique;