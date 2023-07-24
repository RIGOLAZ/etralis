import React from 'react';
import Comment from '../components/Comment';
import Footer1 from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
import ContactBanner from '../components/ContactBanner';

const Piscine = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
		<div id="marge"></div>
		<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1690054811/piscine_cool_imf0uh.jpg")`}} >
			<div className='titre-home'>
				<i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>PISCINE</h2>
			</div>
		</div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Piscine<br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>a piscine est un bassin artificiel, étanche, rempli d'eau et dont les dimensions permettent à un être humain de s'y plonger au moins partiellement. Une piscine se différencie d'une cuve ou d'une baignoire par ses équipements de filtration (pompe, filtre…). Il existe différents types de piscine dont les caractéristiques varient en fonction de leurs destinations (piscine privée, piscine privée à usage collectif, piscine publique) et de leur usage (piscine familiale, piscine de loisir, piscine thérapeutique, piscine d'entraînement sportif, piscine de plongée, aussi appelée « fosse à plongée »…). Les piscines servent à la détente, la socialisation, le jeu, le sport (natation course, plongée, water-polo), et l'apparat (décoratif). Confère: <a href="https://fr.wikipedia.org/wiki/Piscine" target="_blank">Wikipédia.</a><br /> Voici les différentes catégories de piscines que nous vous offrons.</p><br />
				<h2>La piscines intérieure</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690056521/piscine-int%C3%A9rieur_w6njaq.jpg" alt="bedroom" />
				<p>Si vous souhaitez profiter de votre piscine à l'abri des regards et en toute intimité, installez-la à intérieur. À inclure dans une nouvelle construction ou à implanter dans une pièce ou une véranda, la piscine intérieure se décline en plusieurs types : autoportante, en coque, en kit ou en béton. Ces piscines engendrent des contraintes techniques. La pièce doit être pourvue d’un excellent système d’isolation, de ventilation et d’aération. Et pour éviter les problèmes d’humidité, Il est impératif, voire primordial d'installer un déshumidificateur.</p><br />
				<h2>La piscine hors sol</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690057845/piscine-jacuzzi_niemel.jpg" alt="lampadaire" />
				<p>Ceux qui ne souhaitent pas s’engager dans des travaux lourds et les piscines onéreuses, la piscine hors sol leur est dédiée. Elle est amovible et ne nécessite aucun travail de maçonnerie, ne requiert aucune formation technique pour son assemblage. Elle est composée de plusieurs parties embrochables. <br /> Il vous suffira donc de juste de lire la notice et l'assembler comme un jouet et le tour est joué. Ce qui vous restera à faire c'est de la remplir d'eau propre. Les piscines hors sol sont très prisées par les adultes pour des moments de détente en toute intimité.</p><br />
				<ContactBanner /><br />
				<h2>La piscine enterrée</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690060466/Piscine_sad4j9.jpg" alt="Biomedical" />
				<p>La piscine enterrée est la plus esthétique et la plus robuste des piscines. Elle est en général faite pour toute un vie , contrairement au la piscine hors-sol. Elle s’adresse à ceux qui désirent une piscine durable et pérenne, utilisable des dizaines d’années. Ce type de structure se décline en divers types, le plus classique étant le modèle maçonné. Très tendance ces derniers temps, la piscine monocoque est une bonne solution puisqu’elle est rapide à installer. Elle est fabriquée en usine puis livrée directement chez vous. Un Professionnel pourra donc procéder à son installation.</p><br />
				<h2>La piscine biologique</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690059005/piscine-bio_t6ztba.jpg" alt="Biomedical" />
				<p>Bio et écolo, La piscine biologique est purement naturelle. Ici, l'eau qui alimente ladite piscine vient de l'écoulement naturel d'une source(Fleuve, rivière, etc..), ceci dit donc aucun besoin des produits chimiques pour nettoyer et traiter cette eau. La piscine est constituée de trois zones bien distinctes : la zone de baignade, la zone de lagunage et enfin celle de régénération. La zone de lagunage est la plus importante, car elle va contenir des plantes aquatiques qui vont filtrer et assainir l’eau. Tout un écosystème composé notamment de plantes aquatiques et de micro-organismes va participer au nettoyage et à l'assainissement.</p><br />
				<h2>La piscine à couloir de nage</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690061223/piscine_olympique_kjcmbk.jpg" alt="Biomedical" />
				<p>Même si sa première vocation est sportive, la piscine à couloir de nage, encore appelée piscine olympique séduit non seulement les sportifs, mais aussi les non sportifs. Elle a une forme longiligne et rectangulaire. La forme longiligne offre un meilleur confort aux nageurs. La longueur de la piscine est plus importante que sa largeur et sa profondeur. les couloirs de nage ont une longueur minimum comprise entre 9 et 20 mètres, et peuvent s'ataler jusqu'a 25 mètres. Cependant, pour des simples séances de natation, 15 mètres suffiront. Coté profondeur, pour une aisance, il faudrait opter pour au moins 1,5 mètre. Le couloir de nage classique mesurant 3 mètres. </p>
				<ContactBanner /><br />
				<h2>La piscine à débordement</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1690062870/piscine-d%C3%A9bordement_vk6m2r.jpg" alt="Biomedical" />
				<p>Comme son nom l'indique, cette piscine « déborde » d’un côté grâce à l’absence de margelle permettant ainsi l’écoulement de l'eau dans les bacs de débordement. C'est un type de piscine haut de gamme de part son design. Pour que le système fonctionne correctement, les bassins tampons doivent contenir au moins le dixième de la quantité totale d’eau dans le bassin principal. L’eau qui passe par le bac sera donc traitée et ensuite réinjectée dans la piscine, et le cycle recommence. Grâce à ce système, les piscines à débordement ont l’avantage d’être propres plus longtemps que les piscines classiques. Détail qui a son importance surtout pour ceux qui sont sensibles au design de leur piscine à débordement, celle-ci se décline en deux types : le débordement mirroir et le débordement en cascade.</p>
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

export default Piscine;