import React from 'react';
// import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { backward } from '../data';

const courantFaible = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1670594868/Courant_faible_mr5ioq.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h1>COURANT FAIBLE</h1>
			</div>
		</div>
            {/* <ComingSoon /> */}
            <section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Courant faible</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>e courant faible est l'opposé du courant fort. Il ne transfère pas de l'energie électrique, mais plutôt du signal électrique (<strong>moins de 10mA</strong>). Il est assimilé à tout système basé sur le transfert d'informations et de données. Voici quelques domaines dans lesquels nous exercons et pouvons vous accompagner.</p>
				<p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a> </p>
				<h2>VIDEO SURVEILLANCE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659863928/vid%C3%A9osurveillance_m2flem.jpg" alt="bedroom" />
				<p>Dans le but de surveiller les lieux, des biens, personnes … des particuliers font de plus en plus recours aux systèmes de vidéosurveillance. Il existe deux types de systèmes de vidéosurveillance: analogique et numérique. Dans ce document, nous présenterons de manière détaillée ses différents systèmes.</p>
                <p id='equip'>Equipements de gestion</p>
                <p>La gestion d’un système de vidéosurveillance se fait par plusieurs équipements (<strong><i>DVR, NVR, serveur, logiciels</i></strong> ). Toute fois le choix de l’équipement de gestion dépend des besoins de l’utilisateur.</p>
                <p><strong>DVR (Digital Video Recorder)</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670414846/DVR_i5lkws.jpg" alt='dvr'/></p>
                <p>Généralement utilisé dans les systèmes de vidéosurveillance analogiques, il a plusieurs fonctions:</p>
                <ul>
                    <li>Multiplexage du flux vidéo : Toutes les caméras du système se connectent au DVR grâce aux ports BNC femelles généralement situées à l’arrière.</li>
                    <li>Enregistrement : les données sont enregistrées dans un disque dur connecté sur la carte mère du DVR</li>
                    <li>Distribution de l’image…</li>
                </ul>
                <p><strong>NVR (Network Video Recorder)</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670414841/NVR_r6sbxj.jpg" alt="nvr" /></p>
                <p>Est un enregistreur utilisé dans les systèmes de vidéosurveillance <strong>IP</strong>. Il réalise les mêmes fonctions qu’un DVR mais avec un résultat de qualité supérieure et possède des ports Ethernets.</p>
                <p><strong>LOGICIELS</strong><img src="https://www.michaelpage.fr/sites/michaelpage.fr/files/styles/advice_node_desktop/public/2022-08/17751-PG_FR_REDIMENSIONNER_VISUELS_FICHE_M%C3%89TIERS_05082022_07_970x388.jpg?itok=DyXSIKeU" alt="logiciel" /></p>
                <p>Ils sont utilisés pour le contrôle à distance et sont compatibles avec l’enregistreur utilise (Marque) et types du système. On peut citer:</p>
                <ul>
                    <li>Pour les DVR : GDMSS (Dahua), XMEYE (Multistar), HIK-CONNECT (Hik-vision)...</li>
                    <li>Pour les NVR : IP cam viewer basic, DroitCam, Iriun 4k webcam, IP Webcam, HIK-VISION, IVM4500…</li>
                </ul>
                <p id='equip'>Equipements de réception</p>
                <p>Dans vidéosurveillance, le principal équipement de réception est la caméra. Son choix se fait en fonction de la zone à filmer, de l’environnement, son mode de transmission, du type de technologies et des besoins de l’utilisateur (prix, caméra noir/blanc, couleur, forme, discrète, infrarouge…).</p>
                <p><strong>FORME DE CAMÉRAS</strong></p>
                <p>L’emplacement d’une caméra dans un système de vidéosurveillance impose une forme précise. On distingue:</p>
                <p><strong>CAMERA DÔME</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670430087/Camera_d%C3%B4me_uxt5nv.png" alt="dôme" /></p>
                <p> Elle peut être placée à l’intérieur comme à l’extérieur, peut être fixer sur le plafond ou le mur et possède plusieurs modelés : Caméra PTZ (Pan tilt Zoom) motorisée et non motorisée : est une caméra capable d’être pilotée à distance (modification de l’angle de vison), et de zoomer par elle-même</p>
                <p><strong>CAMERA BULLET</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670595298/Camera_bullet_ygwgfx.png" alt="bullet" /></p>
				<p>Elle possède une tige et est utilisée pour la surveillance des routes, l’extérieur des maisons.</p>
                <h2>DOMOTIQUE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659879626/Domo-mini_xeqf4i.jpg" alt="domo" />
                <p>Le mot “<strong>domotique</strong>” vient de “domus” qui signifie “<strong>domicile</strong>“,&nbsp;et du suffixe “tique” qui fait référence à la<span>&nbsp;</span><strong>technique?</strong> D'après &nbsp;<a href="https://fr.wikipedia.org/wiki/Domotique" target="_blank" rel="noopener noreferrer">Wikipedia</a><span>&nbsp;</span>:</p>
                <p>La domotique est l’ensemble des techniques de l'électronique, de physique du bâtiment, d'automatisme, de l'informatique et des télécommunications utilisées dans les bâtiments, plus ou moins « interopérables » et permettant de centraliser le contrôle des différents systèmes et sous-systèmes de la maison et de l'entreprise (chauffage, volets roulants, porte de garage, portail d'entrée, prises électriques, etc.).<span>&nbsp;</span><strong>La domotique vise à apporter des solutions techniques pour répondre aux besoins de confort</strong><span>&nbsp;</span>(gestion d'énergie, optimisation de l'éclairage et du chauffage),<span>&nbsp;</span><strong>de sécurité</strong><span>&nbsp;</span>(alarme)<span>&nbsp;</span><strong>et de communication</strong><span>&nbsp;</span>(commandes à distance, signaux visuels ou sonores, etc.)<span>&nbsp;</span><strong>que l'on peut retrouver dans les maisons</strong>, les hôtels, les lieux publics, etc.</p>
				<h2>ALARME INCENDIE ET GAZ</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670488527/fire-alarm_s6aof6.jpg" alt="Biomedical" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, adipisci, esse tenetur quod eum veniam nulla odio autem, aut illum exercitationem quaerat doloremque aspernatur architecto doloribus natus? Accusamus, magni laboriosam.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum facere et totam ducimus quo, corrupti a vel nam, reiciendis omnis magni id tempore laboriosam ipsa. Possimus nisi voluptate dolore?
				</p>
				<h2>CONTROLE D'ACCES</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670487840/acc%C3%A8s_aotb3e.png" alt="panel" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium molestiae fugit dolor aliquid nostrum atque iusto iure, libero magni deleniti deserunt, sapiente alias unde, ad id temporibus doloremque illo.</p>
				<h2 id='conseil'> </h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local</h3>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, adipisci, esse tenetur quod eum veniam nulla odio autem, aut illum exercitationem quaerat doloremque aspernatur architecto doloribus natus? Accusamus, magni laboriosam.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum facere et totam ducimus quo, corrupti a vel nam, reiciendis omnis magni id tempore laboriosam ipsa. Possimus nisi voluptate dolore?</p>
				<h3>Les critères d'une installation aux normes</h3>
				<h4>Sélectivité</h4>
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

export default courantFaible;