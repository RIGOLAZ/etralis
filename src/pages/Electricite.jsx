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
	<div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1653849385/electricien_kymtcn.jpg")`}} >
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
				<h2>ELECTRICITE DOMESTIQUE</h2>
				<p>C’est l’électricité du réseau électrique distribuée et utilisée dans les logements de particuliers ainsi que dans les lieux où les besoins sont similaires (Domicile, bureau, boutique, etc…). </p>
				<h2>MAINTENANCE INDUSTRIELLE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>ELECTRICITE PUBLIQUE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>ELECTRICITE INDUSTRIELLE</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2>Energie renouvelable</h2>
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier...</p>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local</h3>
				<p>Lors de l’aménagement dans une nouvelle maison, Il faudrait tout d'abord demander une vérification minutieuse du compteur électrique présent sur le lieu par la société fournitrice de l'électricié, et dans le même ordre d'idée, demander un changement de nom pour que vous deveniez le nouveau propriétaire du compteur.
					Pour besoin d'accompagenement, nous contacter.<br/> Ensuite, il est important, voire primordial de faire passer au peigne fin tout le circuit électrique par un professionnel du métier. Les circuits doivent non seulement respecter une certaine norme, mais aussi être en bon état car "prévenir vaut mieux que guerrir".</p>
				<h3>Les critères d'une installation aux normes</h3>
				<h4>Sélectivité</h4>
				<p>Une panne électrique survenue dans un local précis d'un bâtiment ne devrait pas affecter un autre local de près ou de loin. Il est donc besoin de faire *une sélectivité complète* afin d'éviter tout désagrément de ce type.</p>
				<h4>Équilibrage de phases</h4>
				<p>Un déséquilibre de votre réseau électrique interne pourrait engendrer la mauvaise qualité de l'électricité chez vous comme chez vos voisins, et donc techniquement générer un mauvais facteur de puissance.
					Il faut noter que la société fournitrice de l'électricité pénalise tout ses clients ayant un mauvais facteur de puissance. La répercution est constatée dans les factures.</p>
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