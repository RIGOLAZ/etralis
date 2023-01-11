import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
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
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>ELECTRICITE</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Electricité <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>'électricité est un élément naturel nécesssaire, voire indispensable pour le fonctionnement de la grande majorité des appareils que nous utilisons en longueur de journée. C'est un phénomène très dangereux, c'est pour cela qu'il est important, voire primordial que les installations électriques soient gérées par des professionnels du métier pour une utilisation optimale et en toute sécurité.
					Voici quelques domaines dans lesquels nous exercons et pouvons vous accompagner.</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Electricité domestique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659882997/photo-1599709173687-64dcfed43386_wbtwll.jpg" alt="bedroom" />
				<p>C'est l'électricité du réseau électrique cablée dans les logements de particuliers ainsi que dans les lieux où les besoins sont similaires (<strong>Domicile</strong>, <strong>bureau</strong>, <strong>boutique</strong>, etc…).
					Ces endroits sont en majorité fréquentés par des adultes, aussi souvent par les enfants et des animaux domestiques. Ceci dit, les installations domestiques doivent respecter une certaine norme de sécurité pour éviter un incident ou pire. c'est pourquoi il est primordial que les installations soient faites par un professionnel du métier.</p><br />
				<h2>Electricité publique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1660467303/eclairage-public_f4jvq2.jpg" alt="lampadaire" />
				<p>C'est l'électricité installée à l'intérieur et à l'extérieur des villes, ceci dans le but de sécurité et de confort des passants. Elle est composée entre autres de <strong>l'éclairage public</strong>, <strong>les feux de signalisation</strong>, etc...
					Dans une ville, Il est non seulement important d'installer le matériel de qualité et aux normes accompagné des appareillages de protection adéquats pour qu'ils restent très longtemps au public sans se détériorer, mais aussi d'avoir à disposition des techniciens dans le domaine qui maîtrisent les circuits de type automatique et autonome en général souterrains. </p><br />
				<h2>Electronique biomédical</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659900642/Scanner_aexb8n.jpg" alt="Biomedical" />
				<p>les différents appareils que nous fournissons, entretenons et dépannons sont:<br />
					<ul>
						<li>l'échographie ;</li>
						<li>la mammographie ;</li>
						<li>la radiologie ;</li>
						<li>l'ostéodensitométrie ;</li>
						<li>l'imagerie par résonance magnétique (IRM) ;</li>
						<li>la tomodensitométrie (scanner) ;</li>
						<li>la tomographie par émission de positons (TEP).</li>
					</ul>
				</p><br />
				<h2>Energie renouvelable</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659901284/photo-1658298775754-5839ffd434cc_k9td2v.jpg" alt="panel" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium molestiae fugit dolor aliquid nostrum atque iusto iure, libero magni deleniti deserunt, sapiente alias unde, ad id temporibus doloremque illo.</p>
				<h2 id='conseil'></h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local</h3>
				<p>Lors de l'aménagement dans une nouvelle maison, il faudrait tout d'abord demander une vérification minutieuse du compteur électrique présent sur le lieu par la société fournitrice de l'électricité, et dans le même ordre d'idée, entamer la procédure de demande de changement de nom pour que vous deveniez le nouveau propriétaire dudit compteur.
					Pour tout besoin ponctuel d'accompagnement, nous contacter directement au <a href="tel:677077030"><strong>677077030</strong></a>.<br/> Ensuite, il est important, voire primordial de faire passer au peigne fin tout le circuit électrique par un professionnel du métier. Les circuits doivent non seulement respecter une certaine norme, mais aussi être en bon état car "prévenir vaut mieux que guerrir".</p>
				<h3>Les critères d'une installation aux normes</h3>
				<h4>Sélectivité</h4>
				<p>Une panne électrique survenue dans un local précis d'un bâtiment ne devrait pas en affecter un autre de près ou de loin pour quelque raison que ce soit. Il est donc besoin de faire *<strong>une sélectivité</strong>* afin d'éviter tout désagrément de ce type.</p>
				<h4>Équilibrage de phases</h4>
				<p>Un déséquilibre de votre réseau électrique interne pourrait engendrer la mauvaise qualité de l'électricité chez vous comme chez vos voisins, et donc peut techniquement générer un mauvais facteur de puissance.
					Il faut noter que la société fournitrice de l'électricité pénalise tous ses clients ayant un mauvais facteur de puissance. La répercution est constatée dans les factures.</p>
				<h4>Protection des personnes</h4>
				<p>Toute construction devrait avoir des appareillages dédiés à la protection des personnes qui utilisent les différents appareils à carcasse métallique présents et accessibles tels que refrigérateurs, fer à repasser, cuisinière électrique, etc... d'où l'importance d'installer le dispositif de terre accompagné des disjoncteurs spécifiques.</p>
				<h4>Circuits repérés et plan de la maison</h4>
				<p>Un tableau électrique fait par un professionnel du métier devrait contenir des stickers permettant d'identifier l'appareillage de protection qui commande tel appareil ou tel local, ceci appuyé par un plan électrique de la maison. Cette pratique permet d'anticiper dans les besoins futurs et aide quiconque, technicien comme simple usager, à vite se repérer lors d'une intervention quelconque. <br />
					Tenez par exemple: Si un disjoncteur déclenche et qu'il est au préalable marqué dessus <strong>"Chauffe eau chambre parents"</strong>, n'importe qui repérerait directement la source du problème et le dépannage serait donc plus aisé.</p>
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