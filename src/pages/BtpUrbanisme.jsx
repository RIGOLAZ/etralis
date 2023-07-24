import React from 'react';
import Comment from '../components/Comment';
import Footer1 from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
import ContactBanner from '../components/ContactBanner';

const BtpUrbanisme = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1662051853/Building_ve6lth.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>BTP ET URBANISME</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/BTP ET URBANISME <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>es BTP...En cours de développement par nos ingénieurs chevronnés...</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Etude
				</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674226787/photo-1523553374578-aba5fa21a345_uwtcpk.jpg" alt="study" />
				<p>En cours de développement par nos ingénieurs chevronnés...<br /><br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance. <br /> Il est primordial que ce soit fait par un professionnel du métier afin de pouvoir coordonner matériel et logiciels pour une utilisation optimale et en toute sécurité.</p><br /><br /><br /><br /><br />
				<h2>Conception</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690220916/drawing_oajyqe.png" alt="drawing" />
				<p>En cours de développement par nos ingénieurs chevronnés...<br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance</p><br /><br /><br />
				<ContactBanner /><br />
				<h2>Réalisation, Contrôle des projets de construction</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1689685940/Building_eykb4a.png" alt="Biomedical" />
				<p>En cours de développement par nos ingénieurs chevronnés...<br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance
				</p><br /><br /><br />
				<h2 id='conseil'></h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
                <h3>En cours de développement par nos ingénieurs chevronnés...</h3>
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

export default BtpUrbanisme;