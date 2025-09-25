import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';
import ContactBanner from '../components/ContactBanner';
import Comment from '../components/Comment';

const Conseils = () => {
    return (
        <div>
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
				<div id='ref'><a href="/">Accueil</a>/Conseils</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>es risques liés aux travaux électriques – tels que les chocs, brûlures par arc, ou chutes lors des interventions en hauteur – sont bien réels et parfois graves. L'absence des équipements conformes (casques isolants, gants diélectriques, chaussures de sécurité, vêtements ignifugés, etc.) expose vos techniciens à des dangers évitables, tout en engageant la responsabilité de l’institution en cas d’incident.

La dotation en ÉPI et ÉPC  :
- Protège le personnel de l'hôpital contre les accidents professionnels ;
- Améliore la qualité et la sérénité du travail ;
- Renforce l’image de rigueur et de conformité de l’hôpital vis-à-vis des normes de sécurité.

En plus de la dotation en ÉPI, il est fortement recommandé que la totalité du personnel technicien soit formée en technique de premiers secours (Soit par la Croix Rouge, soit par une équipe de médecins qui maîtrise lesdites techniques) au cas où!.</p><br />
				{/* <p>Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</p> */}
				<h2>Electricité domestique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659882997/photo-1599709173687-64dcfed43386_wbtwll.jpg" alt="bedroom" />
				<p>C'est l'électricité du réseau électrique cablée dans les logements des particuliers ainsi que dans les lieux où les besoins sont similaires (<strong>Domicile</strong>, <strong>bureau</strong>, <strong>boutique</strong>, etc…).
					Ces endroits sont en majorité fréquentés par des adultes, aussi souvent par les enfants et des animaux domestiques. Ceci dit, les installations domestiques doivent respecter une certaine norme de sécurité afin d'éviter un incident ou pire, un accident. C'est pourquoi il est impératif, voire primordial que ces installations soient faites par des professionnels du métier.</p><br />
				<h2>Electricité publique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1660467303/eclairage-public_f4jvq2.jpg" alt="lampadaire" />
				<p>C'est l'électricité installée à l'intérieur et à l'extérieur des villes, ceci dans le but de sécurité et de confort des passants. Elle est composée entre autres de <strong>l'éclairage public</strong>, <strong>les feux de signalisation</strong>, etc...
					Dans une ville, Il est non seulement important d'installer le matériel de qualité et aux normes accompagné des appareillages de protection adéquats pour qu'ils restent très longtemps au public sans se détériorer, mais aussi d'avoir à disposition des techniciens dans le domaine qui maîtrisent les circuits de type automatique et autonome en général souterrains. </p><br />
				<ContactBanner /><br />
				<h2>Electronique biomédical</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659900642/Scanner_aexb8n.jpg" alt="Biomedical" />
				<p>Les appareils servant au diagnostic et au traitement des patients en sont constitués. Ce domaine est un mélange de médecine, de biologie, d'ingénierie et de physique.</p>
				<p>les différents appareils que nous fournissons, entretenons et dépannons sont:<br />
				<p> - l'échographie ;<br />
				- la mammographie ;<br />
				- la radiologie ;<br />
				- l'ostéodensitométrie ;<br />
				- l'imagerie par résonance magnétique (IRM) ;<br />
				- la tomodensitométrie (scanner) ;<br />
				- la tomographie par émission de positons (TEP).</p>
				<p>Il faut noter que la totalité des appareils biomédicaux connectables sur un réseau informatique est livré avec un interlogiciel qui protège les appareils biomédicaux des cyberattaques.</p></p><br />
				<h2>Panneau solaire</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659901284/photo-1658298775754-5839ffd434cc_k9td2v.jpg" alt="panel" />
				<p>Un panneau solaire est une plaque qui capte l’énergie du soleil pour la transformer en électricité ou en chaleur. C'est une solution rentable et respectueuse de l’environnement. Elle permet aussi de faire beaucoup d'économie en énergie courante.</p>
				<h2 id='kindPanel'></h2>
				<div id="marge"></div>
				<h3>les types de panneaux.</h3>
				<p>Il existe quatre types de panneaux solaires distingués par leurs caractéristiques et le type d'énergie produite: Le panneau thermique, le panneau photovoltaïque et le modèle hybride et aérovoltaïque.</p><br />
				<p>
					<ol>
						<li><strong>le panneau solaire thermique</strong>: C'est un dispositif qui transforme l'énergie solaire en énergie calorifique. Il est utilisé pour avoir de l'eau chaude sanitaire, mais aussi pour alimenter le système de chauffage. Le chauffe-eau solaire est la solution idéale pour réaliser entre 40 et 50 % d’économie sur votre facture d’eau chaude.</li>
						<p>NB: Sachez que contrairement au panneau photovoltaïque, il ne permet pas d'obtenir de l'électricité.</p><br />
						<li><strong>le panneau photovoltaïque</strong>: C'est le plus utilisé. Il est composé de cellules photovoltaïques qui lui permettent de produire du courant électrique lorsqu'il est soumis aux rayons du soleil.
							<p>Il en existe deux types:
								<ul>
									<li><strong>Le monocristallin</strong>: Constitué d’un seul cristal de silicium et est de couleur gris noir métallique. Il a un aspect plus sombre. Il est plus performant. Son rendement se trouve entre 16 et 24 %. Il est plus couteux que le panneau polycristallin.</li>
									<li><strong>le polycristallin</strong>: Constitué de plusieurs cristaux de silicium, il est de couleur bleue non uniforme. Son rendement ne dépasse pas 18%. c'est le plus vendu à cause de sa simplicité de fabrication.</li>
								</ul>
							</p>
						</li>
						<li><p><strong>le panneau solaire hybride</strong>: C est un panneau qui combine deux fonctions: la production de l'électricité Photovoltaïque et la production d'eau chaude. il est encore appelé <strong>panneau PV/T air</strong>.</p></li><br />
						<li><p><strong>Le panneu solaire aérovoltaïque</strong> par contre combine plutôt les fonctions de production de l'éctricité et la production de l'air chaud. Il est encore appelé <strong> panneau PV/T air</strong>.</p></li>

					</ol>
					<ContactBanner />
				</p>
				<h2 id='conseil'></h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local.</h3>
				<p>Lors de l'aménagement dans une nouvelle maison, il faudrait tout d'abord demander une vérification minutieuse du compteur électrique présent sur le lieu par la société fournitrice de l'électricité, et dans le même ordre d'idée, entamer la procédure de demande de changement de nom pour que vous deveniez le nouveau propriétaire dudit compteur. Pour tout besoin ponctuel d'accompagnement, nous contacter directement au <a href="tel:677077030"><strong>677077030</strong></a>.<br /> Ensuite, il est important, voire primordial de faire passer au peigne fin tout le circuit électrique par un professionnel du métier. Les circuits doivent non seulement respecter une certaine norme, mais aussi être en bon état car "prévenir vaut mieux que guerrir".</p>
				<h3>Les critères d'une installation électrique aux normes.</h3>
				<h4>Sélectivité</h4>
				<p>Une panne électrique survenue dans un local précis d'un bâtiment ne devrait pas en affecter un autre de près ou de loin pour quelque raison que ce soit. Il est donc besoin de faire *<strong>une sélectivité</strong>* afin d'éviter tout désagrément de ce type.</p>
				<h4>Équilibrage de phases</h4>
				<p>Un déséquilibre de votre réseau électrique interne pourrait engendrer la mauvaise qualité de l'électricité chez vous comme chez vos voisins, et donc peut techniquement générer un mauvais facteur de puissance. Il faut noter que la société fournitrice de l'électricité pénalise tous ses clients ayant un mauvais facteur de puissance. La répercution est constatée dans les factures.</p>
				<h4>Protection des personnes</h4>
				<p>Toute construction devrait avoir des appareillages dédiés à la protection des personnes qui utilisent les différents appareils à carcasse métallique présents et accessibles tels que refrigérateurs, fer à repasser, cuisinière électrique, etc... d'où l'importance d'installer le dispositif de terre accompagné des disjoncteurs spécifiques.</p>
				<h4>Circuits repérés et plan de la maison</h4>
				<p>Un tableau électrique fait par un professionnel du métier devrait contenir des stickers permettant d'identifier l'appareillage de protection qui commande tel appareil ou tel local, ceci appuyé par un plan électrique de la maison. Cette pratique permet d'anticiper dans les besoins futurs et aide quiconque, technicien comme simple usager, à vite se repérer lors d'une intervention quelconque. <br />Tenez par exemple: Si un disjoncteur déclenche et qu'il est au préalable marqué dessus <strong>"Chauffe eau chambre parents"</strong>, n'importe qui repérerait directement la source du problème et le dépannage serait donc plus aisé.</p>
				<h3>Installation des systèmes solaires.</h3>
				<p>L'installation d'un système solaire doit être impérativement faite par des techniciens aguerris qui peuvent facilement discerner les types de panneaux. En fait, tous les panneaux solaires comme expliqués plus <a id='solar' href="#kindPanel">haut</a> n'ont pas la même fonction et doivent s'utiliser dans les domaines bien précis.</p>
				<p>Le technicien pourra donc, après analyse minutueuse vous établir un devis précis et concis tout en vous donnant les conseils sur tel ou tel choix de (battérie de stockage, onduleur adéquat, type d'appareillage de connexion à utiliser, etc...) </p>
				<p>Les panneaux doivent fonctionner dans les conditions favorables, cad nous devons être dans une zone où l'ensolleillement est de 1000W/m², où nous avons une température de 25°, et dont le coefficient air-masse est 1,5.</p>
			</div>
			</div>
				</div>
			</section>
			<Comment />
        </main>
            <Footer />
        </div>
    );
};

export default Conseils;