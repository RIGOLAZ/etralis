import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { backward } from '../data';

const Electricite = () => {
    return (
<>
	<Header />
	<Sidebar />
<main>
	<div id="marge"></div>
	<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/a_180/v1659815230/photo-1635335874521-7987db781153_nuqnn5.jpg")`}} >
		<div className='titre-home'>
			<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h1>ELECTRICITE</h1>
		</div>
		{/* <span>Nos services dans le domaine...</span> */}
	</div>
			<section className="section-blog section-blog-article">
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div id="article-body" className="body">
				<p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a> </p>
				<img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659882997/photo-1599709173687-64dcfed43386_wbtwll.jpg" alt="" /><h2>ELECTRICITE DOMESTIQUE</h2>
				<p>C’est l’électricité du réseau électrique distribuée et utilisée dans les logements de particuliers ainsi que dans les lieux où les besoins sont similaires (Domicile, bureau, boutique, etc…). </p>
				<h2>MAINTENANCE INDUSTRIELLE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>ELECTRICITE PUBLIQUE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>ELECTRICITE INDUSTRIELLE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>Energie renouvelable</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2 id='conseil'> </h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local</h3>
				<p>Lors de l’aménagement dans une nouvelle maison, il faudrait tout d'abord demander une vérification minutieuse du compteur électrique présent sur le lieu par la société fournitrice de l'électricié, et dans le même ordre d'idée, entamer la procédure de demande de changement de nom pour que vous deveniez le nouveau propriétaire dudit compteur. <br />
					Pour tout besoin ponctuel d'accompagnement d'accompagenement, nous contacter directement <a href="tel:694088330">694 08 83 30</a>.<br/> Ensuite, il est important, voire primordial de faire passer au peigne fin tout le circuit électrique par un professionnel du métier. Les circuits doivent non seulement respecter une certaine norme, mais aussi être en bon état car "prévenir vaut mieux que guerrir".</p>
				<h3>Les critères d'une installation aux normes</h3>
				<h4>Sélectivité</h4>
				<p>Une panne électrique survenue dans un local précis d'un bâtiment ne devrait pas en affecter un autre de près ou de loin pour quelque raison que ce soit. Il est donc besoin de faire *<strong>une sélectivité</strong>* afin d'éviter tout désagrément de ce type.</p>
				<h4>Équilibrage de phases</h4>
				<p>Un déséquilibre de votre réseau électrique interne pourrait engendrer la mauvaise qualité de l'électricité chez vous comme chez vos voisins, et donc peut techniquement générer un mauvais facteur de puissance.
					Il faut noter que la société fournitrice de l'électricité pénalise tout ses clients ayant un mauvais facteur de puissance. La répercution est constatée dans les factures.</p>
				<h4>Protection des personnes</h4>
				<p>Toute construction devrait avoir des appareillages dédiés à la protection des personnes qui utilisent les différents appareils à carcasse métallique présents et accessibles tels que refrigérateurs, fer à repasser, cuisinière électrique, etc... d'où l'importance d'installer le dispositif de terre accompagné des disjoncteurs spécifiques.</p>
				<h4>Circuits reprérés</h4>
				<p>Un tableau électrique fait par un professionnel du métier devrait contenir des stickers permettant d'identifier l'appareillage de protection qui commande tel appareil ou tel local. Cette pratique permet d'anticiper dans les besoins futurs et aide quiconque, technicien comme simple usager, à vite se repérer lors d'une intervention quelconque. <br />
				Tenez par exemple: Si un disjoncteur déclenche et qu'il est au préalable marqué dessus "Chauffe eau chambre parents", n'importe qui repérerait directement la source du problème et le dépannage serait donc plus aisé</p>
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

export default Electricite;