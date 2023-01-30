import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Partenariat = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
		<div id="marge"></div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Partenariat</div>
				<div className="inner">
            <div className="container">
			<div className="body">
                <h1>Partenariat</h1>
				<p><a href="https://rigolaz-c5df3.web.app/" target="_blank">https://rigolaz.com</a></p>
                <p><a href="https://mediplus.cm" target="_blank">https://mediplus.cm</a></p>
			</div>
			</div>
				</div>
			</section>
			<Comment />
        </main>
            <Footer />
        </>
    );
};

export default Partenariat;