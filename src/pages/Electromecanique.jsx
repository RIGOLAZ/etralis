import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';
import ContactBanner from '../components/ContactBanner';

const Electromecanique = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
        <div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1659862487/%C3%A9lectrom%C3%A9canique_emdoxj.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>ELECTROMECANIQUE</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Electromécanique <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>'électromécanique est l'association des techniques de l'électricité et de la mécanique. Confère: <a href="https://fr.wikipedia.org/wiki/Électromécanique" target="_blank">Wikipédia.</a></p>
                <p>Voici quelques domaines dans lesquels nous exercons et pouvons vous accompagner.</p><br />
				<h2>Electroménager</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675071437/photo-1670669524354-48808ccf1d85_bgicxl.jpg" alt="Lave-linge" />
				<p>le terme électroménager fait référence à tout appareil électrique utilisé dans le cadre domestique. Nous pouvons citer: la moulinette électrique, la machine à laver, la bateuse électrique, etc...</p>
                <p>Ces appareils sont en général ceux avec lesquels nous passons pratiquement toute notre existance, c'est pourquoi il est impératif de les choisir de façon très minutieuse afin de ne pas regretter un choix à un moment donné!</p>
                <p>Bientôt nous aurons une rubrique achat et location de matériel dans notre site web pour vous faciliter les choses au <strong>prix Eco+</strong> tout en vous proposant des <strong>garanties alléchantes</strong>.</p>
                <p>Néanmoins, nos équipes sont disponibles pour l'entretien et le dépannage de vos appareils au cas où vous les auriez déjà achetés.</p><br />
				<h2>Groupe électrogène</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675075163/GE_inbves.jpg" alt="GE" />
				<p>Un groupe électrogène est un appareil électromécanique autonome capable de produire de l'électricité. Il vient en secours en prennant le relais lorsque le courant électrique fréquemment utilisé se coupe, ceci pour assurer une réalimentation des appareils, le temps de la reprise. Il existe plusieurs types de groupes électrogènes, chacun dans un domaine d'activité précis.</p>
                <p>L'installation d'un groupe électrogène demande la prise en compte de plusieurs paramètres: Le gabari, le type de groupe, la direction de la fumée en échappement, etc... C'est pourquoi il est fortement conseillé de léguer ladite installation à un professionnel du métier. </p><br />
                <ContactBanner /><br />
				<h2>Ascenseur</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675076410/Ascens_mcvlva.jpg" alt="Biomedical" />
				<p>Un ascenseur est un appareil servant au transport vertical des personnes aux différents étages d'un immeuble.<br /></p>
                <p>On trouve principalement deux modèles d’ascenseurs: <strong>hydrauliques</strong> et <strong>électriques</strong>.</p>
                <p> - Les <strong>ascenseurs hydrauliques</strong>: Ici, les pistons et vérins composent ce type de système actionnés par une centrale hydraulique. Le système est plus doux et plus silencieux correspond aux petits immeubles. Son déplacement est également plus lent, ce qui explique aussi la plus grande douceur.</p>
                <p> - Les <strong>ascenseurs électriques</strong>: Ce le modèle le plus utilisé. Il est constitué d’un moteur qui situé au niveau de la gaine, afin de minimiser l’espace occupé. Ce moteur permet l’élévation de l’ascenseur par le système du contrepoids. L’électronique vient ici remplacer la partie hydraulique.</p>
                <p>Il est serait donc de bon ton de se rapprocher des professionnels dans le domaine des ascenseurs avant toutefois de se lancer dans l'installation.</p><br />
                <h2>Distributeur automatique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675251452/DAB_lrcqwy.jpg" alt="dab" />
                <p>Un distributeur automatique, ou machine distributrice est une machine qui permet d'obtenir des biens, sans intervention humaine (en libre-service), grâce aux techniques d'automatique. Les machines les plus courantes sont les distributeurs automatiques de boissons chaudes, notamment de café, mais on trouve aussi des distributeurs de boissons fraîches avec des ingrédients comme l'eau, les fruits ou le thé, ainsi que les distributeurs de snacks.
                Les banques ont aussi développé des automates permettant de retirer de l'argent avec une carte bancaire, le distributeur automatique de billets.</p><br />
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

export default Electromecanique;