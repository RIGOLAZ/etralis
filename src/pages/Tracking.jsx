import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Comment from '../components/Comment';
import Footer1 from '../components/Footer';
import { backward } from '../data';
import ContactBanner from '../components/ContactBanner';


const Tracking = () => {
    return (
            <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1681460692/Traking_xnjydd.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>TRACKING ET SOLUTIONS EMBARQUEES</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Tracking <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>e Tracking, terme employé en cas de pandémie pour le traçage numérique des populations, ou en abrégé traçage.</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Tracking</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674226787/photo-1523553374578-aba5fa21a345_uwtcpk.jpg" alt="bedroom" />
				<p>En cours de développement par nos ingenieurs... <br /><br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance</p>
                <p>Il est primordial que ce soit fait par un professionnel du métier afin de pouvoir coordonner matériel et logiciels pour une utilisation optimale et en toute sécurité.</p><br />
				<h2>Objets connectés</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674226416/photo-1528901166007-3784c7dd3653_xxg6zm.jpg" alt="lampadaire" />
				<p>En cours de développement par nos ingenieurs... <br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance</p>
				<ContactBanner /><br />
				<h2>Solutions embarquées</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674416650/photo-1544197150-b99a580bb7a8_y6ewit.jpg" alt="Biomedical" />
				<p>En cours de développement par nos ingenieurs...<br />
				Néanmoins, Vous pouvez dores et déjà nous contacter pour une assistance
				</p><br />
				<h2 id='conseil'></h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
                <h3>En cours de développement par nos ingenieurs...</h3>
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

export default Tracking;