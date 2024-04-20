import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div class="propos">
        <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1659896658/TGBT_p8ubcc.jpg" alt='tof'/>	
        <p className="title1"><span>ETRALIS</span></p>
        <p classname="first1"><strong>"ETRALIS"</strong> est une entreprise de prestations de services dans les domaines techniques créée le 18 septembre 2012 par ma modeste personne, Rigobert EKWA MOUNGUI.</p>
        <p>Tout a commencé par une simple observation. La plupart du temps où j’assistais les électriciens aux chantiers, je constatais qu’ils faisaient les câblages à la hâte, sans respect des normes et sans projection dans le futur. Et en plus, ils ne facilitaient pas la tâche à une tierce personne, technicien comme simple usager, à vite se repérer lors d'une intervention après leur passage, se rendant ainsi négativement indispensables. J’ai donc décidé de monter une entreprise d’électricité que j’ai appelé ETOILE-TRIANGLE Services, c’est vrai que ce nom était trop long et pas vendeur du tout.</p>
        <p>Eh bien, quand j’ai commencé à avoir des marchés et qu’ensuite j’ai gagné la confiance de ma clientèle, cette dernière m’a plus d’une fois posé des problèmes d’ordre technique, mais qui ne concernaient pas ma spécialité phare. J’ai donc non seulement décidé de m’entourer des meilleurs que je connaisse dans ces domaines (camarades de classes et plusieurs autres amis), mais aussi tissé des partenariats. Et pour plus de professionnalisme et de visibilité, Je me suis lancé dans l’apprentissage du développement web et design et boom, j’ai développé mon site web from scratch hébergé chez le géant Google (celui dans lequel vous surfez actuellement). J’ai produit mes propres cartes de visites appréciées par la majorité de mes clients, j'ai trouvé un nom vendeur <strong>'ETRALIS'</strong> et j'ai mis un peu de design sur le LOGO de mon entreprise, celui que vous voyez en haut à gauche.</p>
        <p>Actuellement, nous proposons nos services dans les domaines comme: ELECTRICITE, INFORMATIQUE, ELECTROMECANIQUE, FROID ET CLIMATISATION, PLOMBERIE DOMESTIQUE ET INDUSTRIELLE, COURANT FAIBLE, CHAUDRONNERIE, TRACKING ET SOLUTIONS EMBARQUEES, BTP ET URBANISME.</p>
        <p>Nous nous engageons à vous offrir les meilleurs services, avec une attention particulière sur l'assistance technique et les conseils par nos spécialistes ingénieurs. l'entreprise a actuellement </p>
        <p className='concl'>Nous gagnons la confiance de nos clients depuis 2012. Vous êtes éligible pour faire partie des clients satisfaits de par notre technicité.</p>
        </div>
        </main>
            <Footer />
        </div>
    );
};

export default AboutUs;