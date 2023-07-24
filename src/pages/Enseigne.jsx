import React from 'react';
import Comment from '../components/Comment';
import Footer1 from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
import ContactBanner from '../components/ContactBanner';

const Enseigne = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1689683632/Enseigne-etra_oag9ir.png")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>ENSEIGNES LUMINEUSES</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Enseigne <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>es enseignes lumineuses...En cours de développement par nos Techniciens chevronnés...</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Design des enseignes</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690221563/lumi_lxaod1.png" alt="bedroom" />
				<p>En cours de développement par nos Techniciens chevronnés <br /><br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance</p>
                <p>Il est primordial que ce soit fait par un professionnel du métier afin de pouvoir coordonner matériel et logiciels pour une utilisation optimale et en toute sécurité.</p><br />
				<h2>Montages des enseignes</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1689684982/Montage_de_l_enseigne_rqwcml.jpg" alt="lampadaire" />
				<p>En cours de développement par nos Techniciens chevronnés...<br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance</p><br /><br /><br />
				<ContactBanner /><br />
				<h2>Installations des plaques publicitaires</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1689685224/panneau_tzpkfs.png" alt="Biomedical" />
				<p>En cours de développement par nos Techniciens chevronnés...<br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance
				</p><br />
				<h2 id='conseil'></h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
                <h3>En cours de développement par nos Techniciens chevronnés...</h3>
			</div>
			</div>
				</div>
			</section>
			<Comment />
        </main>
            <Footer1 />
        </>
    );
};

export default Enseigne;