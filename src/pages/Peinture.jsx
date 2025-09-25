import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';
import ContactBanner from '../components/ContactBanner';

const PeintureMaison = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <div id="marge"></div>

        {/* HERO */}
        <div
          className="intro"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), 
                              url("https://res.cloudinary.com/do8lyndou/image/upload/v1758742438/multirecycle-recyclage-peinture_zadgor.jpg")`
          }}
        >
          <div className="titre-home">
            <i onClick={backward} className="fa-solid fa-caret-left fa-xl"></i>
            <h2>PEINTURE MAISON</h2>
          </div>
        </div>

        {/* BREADCRUMB */}
        <section className="section-blog section-blog-article">
          <div id="ref">
            <a href="/">Accueil</a>/Peinture-maison <br /><br />
            Saut direct aux <a href="#conseil"><strong>Conseils</strong></a>.
          </div>

          <div className="inner">
            <div className="container">
              <div className="body">
                <p>
                  <span id="lettrine">R</span>
                  enforcer la beauté de votre maison tout en la protégeant des
                  intempéries : c’est l’objectif de notre service peinture
                  intérieure & façade. Façades en pierre dorée lyonnaise,
                  enduits talochés, pièces humides ou chambres d’enfants,
                  nous choisissons les produits adaptés à chaque support pour
                  un résultat durable et esthétique.
                </p>
                <br />
				 <p>Donnez une nouvelle âme à vos bâtiments
					Que ce soit pour rafraîchir une façade, protéger une structure ou transformer intérieurement un espace, notre savoir-faire en peinture de bâtiments allie esthétique, durabilité et respect des normes. Nous intervenons sur logements collectifs, bureaux, entrepôts et sites industriels, en sélectionnant les produits adaptés à chaque support et à chaque environnement.
					De la préparation minutieuse des surfaces à la pose de finitions irréprochables, nous garantissons un rendu impeccable, dans les délais et sans surprise. Faites confiance à notre équipe certifiée pour redonner à vos façades, murs et plafonds leur éclat et leur protection, durablement..
				</p><br />

                <h2>Façade & ravalement</h2>
                <img
                  src="https://res.cloudinary.com/do8lyndou/image/upload/v1758742477/hq720_sfncuu.jpg"
                  alt="façade maison peinture"
                /> <br />
                <p>
                  Nous réalisons le nettoyage (hydro-gommage, sablage doux),
                  la réparation des micro-fissures, l’application d’hydrofuge
                  de façade et la pose de peintures minérales ou
                  silicones. <strong>Garantie 10 ans</strong> contre
                  l’écaillage et l’infiltration d’eau.
                </p>

                <h2>Intérieurs & pièces humides</h2>
                <img
                  src="https://res.cloudinary.com/do8lyndou/image/upload/v1758792243/moisissure_fhbk5f.jpg"
                  alt="salon peinture intérieure"
                />
                <p>
                  Peintures lavables, anti-taches, effets décoratifs (béton
                  ciré, époxy cuisine, satin boiserie). Nous appliquons des
                  produits <strong>bas-COV et A+</strong> pour une reprise
                  rapide des lieux (24 h).
                </p>
<p>
  Cuisine, salle de bain, buanderie, arrière-cuisine ou WC : l’humidité
  ambiante dépasse 70 % et la vapeur d’eau charge les parois en sel
  de surface (efflorescence). Notre processus « pièces humides »
  garantit <strong>5 ans</strong> contre l’éclatement, les auréoles
  et la formation de moisissures.
</p>

<h4>1. Diagnostic humidité & préparation</h4>
<ul>
  <li>Mesure hygrométrique (sonde à condensation)</li>
  <li>Traitement anti-sel (lixiviation) et lessivage à l’acide citrique</li>
  <li>Mastic époxy pour reboucher les micro-fissures ≥ 0,3 mm</li>
  <li>Impression spéciale « Humidité Stop » à base de résine acrylique
      microporeuse (perméance ≤ 0,5 m)</li>
</ul>

<h4>2. Peintures techniques</h4>
<ul>
  <li><strong>Cuisine</strong> : vinyle washable classe 2B, résiste aux
      taches de graisse, vin, café, ammoniaque</li>
  <li><strong>Salle de bain & WC</strong> : acrylique satin « Anti-buée »
      avec biocide intégré (ISO 22196)</li>
  <li><strong>Buanderie</strong> : peinture époxy bi-composants 100 % solide,
      résistante lessive, javel 12 %, vapeur 60 °C</li>
  <li>Teintes infinies (nuancier Seigneurie AQUAREL) + effet
      « béton ciré » ou « résine lavée » sur demande</li>
</ul>

<h4>3. Finitions & accessoires</h4>
<ul>
  <li>Joint silicone neutre rebouché avant peinture pour angle douche/baignoire</li>
  <li>Peinture carrelage : résine polyuréthane 2K, finition satin,
      compatible chauffage au sol</li>
  <li>Plafond : acrylique mate « Anti-condensation » à 0 % de brillant,
      lavable à l’éponge</li>
</ul>

<h4>4. Délais & reprise des lieux</h4>
<ul>
  <li>Temps de séchage : 4 h entre couches, 24 h pour la reprise complète</li>
  <li>Odeur quasi nulle (COV ≤ 0,1 g/L) – enfants & animaux peuvent
      rentrer le soir même</li>
  <li>Nettoyage outils à l’eau claire (sans solvant) – label Éco-peinture</li>
</ul>

<p>
  <em>Option « ventilation forcée » : mise en place d’un extracteur
  temporaire 48 h pour accélérer le séchage en période hivernale.</em>
</p>

                <ContactBanner />

                <h2>Boiserie & ferronnerie</h2>
                <img
                  src="https://res.cloudinary.com/do8lyndou/image/upload/v1758792376/volets_peinture_avant_apres_v2_euuzxb.jpg"
                  alt="volets peints"
                />
                <p>
                  Volets, portails, pergolas : décapage thermique,
                  apprêt, finition laque ou vitrificateur UV. Protection
                  <strong>5 ans</strong> contre le jaunissement et l’écaillage.
                </p>
<p>
  Volets, portails, pergolas, ferronneries d’escalier ou garde-corps :
  ces éléments subissent <strong>UV, pluie, variations de température</strong>
  et demandent un traitement spécifique. Notre processus en 4 phases
  garantit une finition <strong>5 ans</strong> contre l’écaillage, le jaunissement
  et la rouille.
</p>
<ol>
  <li>
    <strong>Décapage thermique ou gommage doux</strong> : retrait total
    des anciennes couches fissurées, suppression de la rouille
    (convertisseur d’oxyde appliqué sur fer).
  </li>
  <li>
    <strong>Impression haute adhérence</strong> : apprêt époxy zinc-phosphate
    sur métal, saturateur microporeux sur bois (pin, chêne, meranti).
  </li>
  <li>
    <strong>Application couche intermédiaire</strong> : peinture
    polyurethane satin 40 % de brillant, très haute résistance
    aux chocs et aux produits ménagers.
  </li>
  <li>
    <strong>Finition UV</strong> : vernis incolore 2 composants
    anti-jaunissement, teinte personnalisée parmi plus de 900
    références (Nuancier Seigneurie « Terres de Lyon » inclus).
</li>
</ol>
<p>
  Nous traitons aussi les <strong>menuiseries PVC et aluminium</strong>
  : re-peinture en atelier (démontage) avec peinture
  « Renolit » garantie 10 ans, choix de finitions mats,
  satin ou métal-brush. Pose de nouveaux joints
  silicone neutre fournis.
</p>
<p>
  <em>Option « bois flotté » ou « effet ferronnerie forgée »
  disponible sur demande pour une ambiance patinée ou
  style industriel.</em>
</p>

                <h2>Extérieurs second-œuvre</h2>
                <img
                  src="https://res.cloudinary.com/do8lyndou/image/upload/v1758792865/batiment-05_yzuh7z.jpg"
                  alt="garage peint"
                />
<p>
  Garage, clôture, piscine, barbecue, mobilier de jardin, dalles béton ou
  plots en résine : ces surfaces « oubliées » subissent <strong>chlore,
  hydrocarbures, gel/dégel, UV</strong>. Notre programme « second-œuvre »
  allie esthétique & protection longue durée (garantie 7 ans sur
  supports minéraux, 5 ans sur métal).
</p>

<h4>1. Garages & abris voiture</h4>
<ul>
  <li>Résine époxy 100 % solide, finition lisse ou antidérapante quartz</li>
  <li>Résistance aux huiles, essences, produits de déglaçage</li>
  <li>Application en 24 h (2 couches) – reprise du trafic léger 12 h</li>
  <li>30 teintes disponibles (RAL ou nuancier béton)</li>
</ul>

<h4>2. Clôtures & portillons</h4>
<ul>
  <li>Décapage + zinc thermique pour les tubes acier</li>
  <li>Peinture polyurethane « 2K » satin, anti-rayure</li>
  <li>Traitement « bois composite » : re-peinture spéciale PVC
      garantie 10 ans</li>
</ul>

<h4>3. Piscines & margelles</h4>
<ul>
  <li>Peinture chlorcaoutchouc 3 couches, résistante chlore & pH 6-8</li>
  <li>Réparation des micro-fissures avant application (mastic époxy)</li>
  <li>Coloris classiques : bleu cobalt, sable, gris anthracite</li>
  <li>Saisonnalité : chantier possible hors gel (T° > 8 °C)</li>
</ul>

<h4>4. Barbecues & cuisines d’été</h4>
<ul>
  <li>Peinture haute température 600 °C pour l’enveloppe métal</li>
  <li>Revêtement alimentaire pour plans de travail extérieurs</li>
  <li>Finition « béton ciré extérieur » sur supports ciment</li>
</ul>

<h4>5. Dalles, plot béton & margelles</h4>
<ul>
  <li>Imprégnation hydrofuge colorée (effet « wet-look » ou mat)</li>
  <li>Résine polyaspartique : séchage 45 min, anti-dérapant classe C</li>
  <li>Rénovation jointière : rejointoyage époxy couleur assortie</li>
</ul>

<p>
  <em>Option « anti-mousse » : ajout d’un biocide dans la couche finale
  pour limiter le développement des végétaux sur les surfaces horizontales.</em>
</p>

<ContactBanner />

                <h2 id="conseil"></h2>
                <div id="marge"></div>

                <h2 id="conseils">Conseils maison</h2>

                <h3>Choisir sa couleur de façade à Lyon</h3>
                <p>
                  Le Plan Local d’Urbanisme impose certaines teintes
                  (calcaire, ocre, terre). Avant achat, nous vous
                  fournissons un nuancier 3D immersif et déposons
                  la demande d’autorisation de travaux en mairie.
                </p>

                <h3>Préparer une pièce avant peinture</h3>
                <p>
                  1) Débrancher les appareils, 2) protéger le sol
                  avec bâche adhésive, 3) reboucher les fissures
                  ≤2 mm avec acrylique, 4) passer un couche
                  d’impression. Notre équipe s’occupe de tout ;
                  vous gardez juste les meubles dégagés.
                </p>

                <h3>Entretien post-travaux</h3>
                <p>
                  Facade : rinçage à l’eau claire chaque printemps.
                  Intérieur : éponge microfibre + eau sans produit
                  abrasif. Révision gratuite au bout de 12 mois
                  inclus dans notre contrat.
                </p>
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

export default PeintureMaison;