import React from 'react';
// import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';

const courantFaible = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1670594868/Courant_faible_mr5ioq.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>COURANT FAIBLE</h2>
			</div>
		</div>
            {/* <ComingSoon /> */}
            <section className="section-blog section-blog-article">
                <div id='ref'><a href="/">Accueil</a>/Courant faible <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>e courant faible est l'opposé du courant fort. Il ne transfère pas de l'energie électrique, mais plutôt du signal électrique (<strong>moins de 10mA</strong>). Il est assimilé à tout système basé sur le transfert d'informations et de données. Voici quelques domaines dans lesquels nous exercons et pouvons vous accompagner.</p><br />
				<h2>VIDEO SURVEILLANCE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659863928/vid%C3%A9osurveillance_m2flem.jpg" alt="bedroom" />
				<p>Dans le but de surveiller les lieux, des biens, personnes … des particuliers font de plus en plus recours aux systèmes de vidéosurveillance. Il existe deux types de systèmes de vidéosurveillance: analogique et numérique. Dans ce document, nous présenterons de manière détaillée ses différents systèmes.</p><br />
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
                <p>Est un enregistreur utilisé dans les systèmes de vidéosurveillance <strong>IP</strong>. Il réalise les mêmes fonctions qu’un DVR mais avec un résultat de qualité supérieure et possède des ports Ethernets.</p><br />
                <p><strong>LOGICIELS</strong></p>
                <p>Ils sont utilisés pour le contrôle à distance et sont compatibles avec l’enregistreur utilise (Marque) et types du système. On peut citer:</p>
                <ul>
                    <li>Pour les DVR : GDMSS (Dahua), XMEYE (Multistar), HIK-CONNECT (Hik-vision)...</li>
                    <li>Pour les NVR : IP cam viewer basic, DroitCam, Iriun 4k webcam, IP Webcam, HIK-VISION, IVM4500…</li>
                </ul>
                <p id='equip'>Equipements de réception</p>
                <p>Dans la vidéosurveillance, le principal équipement de réception est la caméra. Son choix se fait en fonction de la zone à filmer, de l’environnement, de son mode de transmission, du type de technologies et des besoins de l’utilisateur (prix, caméra noir/blanc, couleur, forme, discrète, infrarouge…).</p><br />
                <p><strong>FORME DE CAMÉRAS</strong></p>
                <p>L’emplacement d’une caméra dans un système de vidéosurveillance impose une forme précise. On distingue:</p>
                <p><strong>CAMERA DÔME</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670430087/Camera_d%C3%B4me_uxt5nv.png" alt="dôme" /></p>
                <p> Elle peut être placée à l’intérieur comme à l’extérieur, peut être fixer sur le plafond ou le mur et possède plusieurs modelés : Caméra PTZ (Pan tilt Zoom) motorisée et non motorisée : est une caméra capable d’être pilotée à distance (modification de l’angle de vison), et de zoomer par elle-même</p><br />
                <p><strong>CAMERA BULLET</strong><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670595298/Camera_bullet_ygwgfx.png" alt="bullet" /></p>
				<p>Elle possède une tige et est utilisée pour la surveillance des routes, l’extérieur des maisons.</p><br />
                <h2>DOMOTIQUE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659879626/Domo-mini_xeqf4i.jpg" alt="domo" />
                <p>Le mot “<strong>domotique</strong>” vient de “domus” qui signifie “<strong>domicile</strong>“,&nbsp;et du suffixe “tique” qui fait référence à la<span>&nbsp;</span><strong>technique?</strong> D'après &nbsp;<a href="https://fr.wikipedia.org/wiki/Domotique" target="_blank" rel="noopener noreferrer">Wikipedia</a><span>&nbsp;</span>:</p>
                <p>La domotique est l’ensemble des techniques de l'électronique, de physique du bâtiment, d'automatisme, de l'informatique et des télécommunications utilisées dans les bâtiments, plus ou moins « interopérables » et permettant de centraliser le contrôle des différents systèmes et sous-systèmes de la maison et de l'entreprise (chauffage, volets roulants, porte de garage, portail d'entrée, prises électriques, etc.).<span>&nbsp;</span><strong>La domotique vise à apporter des solutions techniques pour répondre aux besoins de confort</strong><span>&nbsp;</span>(gestion d'énergie, optimisation de l'éclairage et du chauffage),<span>&nbsp;</span><strong>de sécurité</strong><span>&nbsp;</span>(alarme)<span>&nbsp;</span><strong>et de communication</strong><span>&nbsp;</span>(commandes à distance, signaux visuels ou sonores, etc.)<span>&nbsp;</span><strong>que l'on peut retrouver dans les maisons</strong>, les hôtels, les lieux publics, etc.</p><br />
				<h2>ALARME INCENDIE ET GAZ</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670488527/fire-alarm_s6aof6.jpg" alt="Biomedical" />
				<p>L’alarme incendie un dispositif permettant d’avertir le public présent dans un bâtiment, ainsi que le personnel, qu’un incendie s’est déclenché. Il est alors possible d’évacuer les lieux pour que toutes les personnes présentes dans le bâtiment soient en sécurité.</p>
                <p>Il convient d’installer un détecteur de fumée à chaque étage du bâtiment. Vous devez privilégier :</p>
                <ul>
                    <li><strong>Les chambres</strong> Tout d’abord, pour être prévenu de l’incendie si vous dormez.</li>
                    <li><strong>Les escaliers</strong> Le lieu est rapidement envahi lors d’un incendie</li>
                    <li><strong>Les autres pièces</strong> Il s’agit principalement les pièces avec beaucoup d’appareils électriques, puisque c’est souvent de ce lieu que proviennent les principaux départs de feux.</li>
                </ul>
                <p>Il est obligatoire d’installer une alarme incendie dans les ERP (Etablissements Recevant du Public).</p><br />
                <p><strong>Un type d’alarme incendie selon le type de ERP</strong></p>
                <p>Plusieurs facteurs doivent être pris en compte avant l’installation du système d’alarme incendie:</p>
                <ul>
                    <li>Tout d’abord, le type d’activité de l’établissement. Il existe une panoplie de catégories, dont les centres commerciaux, discothèques, les musées, les magasins, les bibliothèques, les maisons de retraite, etc…</li>
                    <li>La taille de l’établissement</li>
                    <li>Sa fréquentation</li>
                    <li>La catégorie dans laquelle l’établissement a été placé par la commission de sécurité incendie.</li>
                </ul>
				<h2>CONTROLE D'ACCES</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1670487840/acc%C3%A8s_aotb3e.png" alt="panel" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium molestiae fugit dolor aliquid nostrum atque iusto iure, libero magni deleniti deserunt, sapiente alias unde, ad id temporibus doloremque illo.</p>
				<h2 id='conseil'> </h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>A propos des détecteurs de fumées</h3>
                <p>Le détecteur s’installe au plafond ou en haut des murs puisque la fumée stagne en général vers le haut d’une pièce. Il est fortement déconseillé de mettre le détecteur dans l’angle formé par le plafond et le mur, et bien parce que l’air n’y circule pas et la fumée ne se disperse pas dans cette zone. Il faut mettre le détecteur à 15 cm de l’angle.</p>
				<p>Evitez d’installer un détecteur de fumée près d’un système d’aération, dans une salle de bain, ou une cuisine car cela risque de déclencher le détecteur sans raison, ou au contraire le détecteur peut ne pas se déclencher en cas de réel départ d’incendie.</p>
                Le détecteur de fumée est utilisé comme alarme incendie dans tous les types de bâtiment. Il est de bon ton de le placer correctement, et d’en installer le nombre nécessaire dans chaque enceinte.
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