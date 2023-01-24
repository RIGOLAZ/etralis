import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {backward} from '../data'

const Informatique = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1670596669/Informatic_e4ns0a.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>INFORMATIQUE</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Informatique <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>'informatique est un domaine d'activité scientifique, technique, et industriel concernant le traitement automatique de l'information numérique par l'exécution de programmes informatiques hébergés par des dispositifs électriques-électroniques : des systèmes embarqués, des ordinateurs, des robots, des automates, etc. Confère: <a href="https://fr.wikipedia.org/wiki/Informatique" target="_blank">Wikipédia.</a></p>
                <p>Voici quelques domaines dans lesquels nous exercons et pouvons vous accompagner.</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Technique en support</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674226787/photo-1523553374578-aba5fa21a345_uwtcpk.jpg" alt="bedroom" />
				<p>Le technicien en support informatique assure la maintenance de tout type de matériel informatique tels que <strong>ordinateurs</strong>, et des <strong>périphériques</strong> comme les imprimantes, disque dur externe, etc... Il s'occupe aussi de la sécurité de l'ensemble des appareils informatiques et leur bon fonctionnement en installant les différents logiciels d'exploitation et des applications. Il s'assure aussi de la sécurité de l'ensemble des logiciels en installant un logiciel antivirus adéquat.</p>
                <p>Il est primordial que ce soit fait par un professionnel du métier afin de pouvoir coordonner matériel et logiciels pour une utilisation optimale et en toute sécurité.</p><br />
				<h2>Développement d'application web et mobile</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674226416/photo-1528901166007-3784c7dd3653_xxg6zm.jpg" alt="lampadaire" />
				<p>De nos jours, le digital est l'un des facteurs incontournables dans la visibilité, dans le travail en local et/ou à distance. Nous concevons des sites webs, les applications pour toutes les plateformes( ordinateurs, téléphones portables, tablettes, montres connectées et même les grands écrans), tout en assurant la responsivité optimale pour une adaptation à tous les supports cités. Tenez par exemple, ce site simpliste, basique et complet dans lequel vous surfez actuellement a été développé par nos équipes. Vous aurez juste à nous spécifier dans un cahier des charges, les fonctionnalités que vous souhaiteriez que nous implémetions pour vous et nous ferons opérer la magie en arrière plan.</p><br />
                <div className='mailling'>
                    <p>Contactez-nous maintenant par mail à <a href='mailto:support@etralis.com' itemProp="significantLink" className="generic-anchor footer-list-anchor">support@etralis.com</a></p></div><br />
				<h2>Réseau informatique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1674416650/photo-1544197150-b99a580bb7a8_y6ewit.jpg" alt="Biomedical" />
				<p>Un réseau informatique (en anglais : data communication network ou DCN) est un ensemble d'équipements reliés entre eux dans le but d'effectuer des transferts de données. Vue la multiplexité des réseaux actuels et le nombre de câbles informatiques qui va grandissant, il est impératif de léguer une tâche relative au réseau informatique à des professionnels du métier car, un câble qui n'est pas à sa place pourrait servir de courroie pour envoyer des informations à une personne lambda qui n'a pas le droit de les avoir!<br />
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
            <Footer />
        </>
    );
};

export default Informatique;