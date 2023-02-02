import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { backward } from '../data';
import Sidebar from '../components/Sidebar';
const Plomberie = () => {
    return (
        <>
        <Header />
        <Sidebar />
    <main>
        <div id="marge"></div>
        <div className='intro' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://res.cloudinary.com/do8lyndou/image/upload/v1670596140/plomberie_uva9p4.jpg")`}} >
			<div className='titre-home'>
				<p><i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i><h2>PLOMBERIE</h2></p>
			</div>
		</div>
        <section className="section-blog section-blog-article">
                <div id='ref'><a href="/">Accueil</a>/Plomberie <br /><br />Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.</div>
				<div className="inner">
            <div className="container">
			{/* <!-- article body  --> */}
			<div className="body">
				<p><span id='lettrine'>L</span>a plomberie est une spécialité de l'ingénieur en mécanique appliquée au bâtiment et du plombier spécialisé, regroupant l'ensemble des techniques utilisées pour faire circuler des fluides (liquide ou gaz) à l'aide de tuyaux, tubes, vannes, robinets, soupapes, pompes aux différents points d'usage d'une installation. etc. Confère: <a href="https://fr.wikipedia.org/wiki/Plomberie" target="_blank">Wikipédia.</a></p><br />
				<h2>La plomberie commerciale</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675263021/photo-1628859266125-8dc2adef1416_istfix.jpg" alt="robinets" />
				<p>En rédaction par nos ingénieurs... Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut impedit accusamus, perferendis, perspiciatis aliquid quaerat tempore nostrum nulla odit, quidem aperiam hic fugit nisi ad quos in repudiandae nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium optio quia, numquam eos odit culpa, eaque, voluptate facere facilis vero perspiciatis. Iste architecto, debitis aliquam culpa temporibus dolorum distinctio doloribus!</p><br />
				<h2>La plomberie résidentielle</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1675264856/photo-1518618750560-8f07abde4e4e_nf6bma.jpg" alt="Plomb" />
				<p>En rédaction par nos ingénieurs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tempora, nesciunt aspernatur eveniet non commodi repellat saepe deleniti esse perferendis. Dolore in sed maxime ipsa cupiditate nemo sequi debitis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ad expedita nisi rerum repudiandae magnam nulla saepe, similique impedit porro asperiores adipisci soluta iusto sunt tempore unde cumque omnis ipsam?</p><br />
                <h2>La plomberie industrielle</h2><img src="https://res.cloudinary.com/do8lyndou/image/upload/v1653850250/plomberie2_sltjc8.jpg" alt="Tuyaux" />
                <p>En rédaction par nos ingénieurs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem error perferendis illo eius adipisci optio quia voluptas eveniet, quisquam nisi dolorum consectetur non suscipit molestiae provident consequuntur vitae a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, voluptas quisquam? Maiores, vel aliquam. Tempore, saepe nisi? Quaerat accusamus quibusdam necessitatibus aperiam, quasi quidem error, asperiores eligendi ab quis fugiat.</p>
                <h2 id='conseil'> </h2>
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

export default Plomberie;