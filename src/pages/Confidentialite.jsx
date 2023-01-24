import React from 'react';
import AstucesConseils from '../components/AstucesConseils';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
// import Cookies2 from '../components/Cookies2';

const Confidentialite = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Confidentialité</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				{/* <Cookies2 /> */}
			</div>
			</div>
				</div>
			</section>
        </main>
            <Footer />
        </>
    );
};

export default Confidentialite;