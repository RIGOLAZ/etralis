import React from 'react';
import { Link } from 'react-router-dom';
import AstucesConseils from '../components/AstucesConseils';
// import ComingSoon from '../components/ComingSoon';
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
			<i onClick={backward} class="fa-solid fa-caret-left fa-xl"></i><h1>ELECTRICITE</h1>
		</div>
		<span>Nos services dans le domaine...</span>
	</div>
			<section class="section-blog section-blog-article">
				<div class="inner">
            <div class="container">
			{/* <!-- article body --> */}
			<div id="article-body" class="body">
				<h2>ELECTRICITE DOMESTIQUE</h2>
				<p>C’est l’électricité du réseau électrique distribuée et utilisée dans les logements de particuliers ainsi que dans les lieux où les besoins sont similaires (Domicile, bureau, boutique, etc…).</p>
				<h3>MAINTENANCE INDUSTRIELLE</h3>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium eveniet dolores pariatur maiores cum, sequi id libero aperiam, vitae amet esse aut neque, molestias tenetur quo excepturi recusandae? Quibusdam.</p>
				<h2>ELECTRICITE PUBLIQUE</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reprehenderit in itaque eveniet ipsa inventore architecto? Voluptas numquam, odit ex, suscipit fuga eius necessitatibus dolore aliquam maiores similique laborum iste!</p>
				<h2>ELECTRICITE INDUSTRIELLE</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo assumenda, delectus quod eius tenetur vitae nostrum corrupti facere ex necessitatibus odio, vel laudantium nesciunt earum ut. Expedita temporibus ullam sapiente necessitatibus aspernatur minus consectetur magni amet fuga aliquam, odit corrupti dicta ad rerum iusto deleniti commodi repudiandae aperiam reiciendis eveniet.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, impedit.</p>
				<h2>Energie renouvelable</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequuntur voluptatum suscipit enim quod beatae. Debitis tempore amet dolores inventore!</p>
			</div>
			</div>
				</div>
			</section>
            <AstucesConseils />
        </main>
        <Footer />
    </>
    );
};

export default Electricite;