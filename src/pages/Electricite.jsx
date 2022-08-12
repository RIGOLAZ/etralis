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
				<h2>ELECTRICITE DOMESTIQUE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659882997/photo-1599709173687-64dcfed43386_wbtwll.jpg" alt="bedroom" />
				<p>C’est l’électricité du réseau électrique distribuée et utilisée dans les logements de particuliers ainsi que dans les lieux où les besoins sont similaires (Domicile, bureau, boutique, etc…). Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem optio tenetur illo magnam! Enim nobis minus et nam eveniet eligendi asperiores error libero consequatur, voluptates similique velit qui eos commodi?</p>
				<h2>ELECTRICITE PUBLIQUE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659898447/photo-1639678937176-bdb7ab9b1212_vtttfs.jpg" alt="lampadaire" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque nihil accusamus aperiam, facilis consectetur perferendis rerum obcaecati officia praesentium temporibus sequi autem repellat? Quam soluta explicabo itaque nemo veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Asperiores non perspiciatis voluptas corrupti dignissimos quos, dolores tenetur vitae, dolor harum a dolorum molestias accusantium error recusandae omnis vel, ipsam possimus.</p>
				<h2>ELECTRICITE INDUSTRIELLE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659896658/TGBT_p8ubcc.jpg" alt="TGBT" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente quasi illum laboriosam quo. Cum id quidem nobis voluptatum officia quod, minus adipisci consequuntur sunt eos dignissimos harum omnis veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Saepe cum quae recusandae quaerat reprehenderit animi, unde obcaecati nesciunt, accusantium dolorum similique debitis? Exercitationem totam placeat reiciendis minima in quae architecto!</p>
				<h2>ELECTRICITE BIOMEDICALE</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659900642/Scanner_aexb8n.jpg" alt="Biomedical" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, adipisci, esse tenetur quod eum veniam nulla odio autem, aut illum exercitationem quaerat doloremque aspernatur architecto doloribus natus? Accusamus, magni laboriosam.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum facere et totam ducimus quo, corrupti a vel nam, reiciendis omnis magni id tempore laboriosam ipsa. Possimus nisi voluptate dolore?
				</p>
				<h2>Energie renouvelable</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659901284/photo-1658298775754-5839ffd434cc_k9td2v.jpg" alt="panel" />
				<p>...Cette partie est en cours de développement pour des explications optimales par nos professionnels du métier... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium molestiae fugit dolor aliquid nostrum atque iusto iure, libero magni deleniti deserunt, sapiente alias unde, ad id temporibus doloremque illo.</p>
				<h2 id='conseil'> </h2>
				<div id="marge"></div>
				<h2 id='conseils'>Quelques conseils</h2>
				<h3>Aménagement dans un nouveau local</h3>
				<p>Lors de l’aménagement dans une nouvelle maison, il faudrait tout d'abord demander une vérification minutieuse du compteur électrique présent sur le lieu par la société fournitrice de l'électricié, et dans le même ordre d'idée, entamer la procédure de demande de changement de nom pour que vous deveniez le nouveau propriétaire dudit compteur.
					Pour tout besoin ponctuel d'accompagnement, nous contacter directement <a href="tel:694088330">694 08 83 30</a>.<br/> Ensuite, il est important, voire primordial de faire passer au peigne fin tout le circuit électrique par un professionnel du métier. Les circuits doivent non seulement respecter une certaine norme, mais aussi être en bon état car "prévenir vaut mieux que guerrir".</p>
				<h3>Les critères d'une installation aux normes</h3>
				<h4>Sélectivité</h4>
				<p>Une panne électrique survenue dans un local précis d'un bâtiment ne devrait pas en affecter un autre de près ou de loin pour quelque raison que ce soit. Il est donc besoin de faire *<strong>une sélectivité</strong>* afin d'éviter tout désagrément de ce type.</p>
				<h4>Équilibrage de phases</h4>
				<p>Un déséquilibre de votre réseau électrique interne pourrait engendrer la mauvaise qualité de l'électricité chez vous comme chez vos voisins, et donc peut techniquement générer un mauvais facteur de puissance.
					Il faut noter que la société fournitrice de l'électricité pénalise tous ses clients ayant un mauvais facteur de puissance. La répercution est constatée dans les factures.</p>
				<h4>Protection des personnes</h4>
				<p>Toute construction devrait avoir des appareillages dédiés à la protection des personnes qui utilisent les différents appareils à carcasse métallique présents et accessibles tels que refrigérateurs, fer à repasser, cuisinière électrique, etc... d'où l'importance d'installer le dispositif de terre accompagné des disjoncteurs spécifiques.</p>
				<h4>Circuits repérés</h4>
				<p>Un tableau électrique fait par un professionnel du métier devrait contenir des stickers permettant d'identifier l'appareillage de protection qui commande tel appareil ou tel local. Cette pratique permet d'anticiper dans les besoins futurs et aide quiconque, technicien comme simple usager, à vite se repérer lors d'une intervention quelconque. <br />
					Tenez par exemple: Si un disjoncteur déclenche et qu'il est au préalable marqué dessus "Chauffe eau chambre parents", n'importe qui repérerait directement la source du problème et le dépannage serait donc plus aisé.</p>
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