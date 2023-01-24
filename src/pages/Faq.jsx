import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import { backward } from '../data';

const Faq = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
              <div id="marge"></div>
              <section className="section-blog section-blog-article">
                <div id='ref'><a href="/">Accueil</a>/FAQ</div>
                  <div className="inner">
                  <div className="container">
                    {/* <!-- article body  --> */}
                    <div className="body">
                      <h1>FAQ</h1>
                      <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <summary itemprop="name"><strong>Navigateurs pris en charge</strong></summary>
                          <div class="details-expanded" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                          <h4>Résumé</h4>
                          <ul>
                            <li>Aperçu</li>
                            <li>Avis importants</li>
                            <li>Navigateurs de bureau</li>
                            <li>Navigateurs mobiles</li>
                            <li>Éditeur en ligne</li>
                          </ul>

                          <h4>Aperçu</h4>
                          <p>Nous vous recommandons de mettre à jour les navigateurs vers les dernières versions pour obtenir les meilleures pratiques et travailler en douceur.</p>

                          <h4>Avis importants</h4>
                          <p>Bien vouloir lire ce qui suit.</p>
                          <ol>
                            <li>Etralis prend en charge sur la grande majorité des appareils à écran tactile ou non.</li>
                            <li>La largeur minimale prise en charge est de 360 pixels.</li>
                          </ol>

                          <h4>Navigateurs de bureau</h4>
                          <p>Etralis prend en charge les deux dernières versions des navigateurs suivants sur les appareils de bureau.</p>
                          <ul>
                            <li>Google Chrome;</li>
                            <li>Safari d'Apple;</li>
                            <li>MicrosoftEdge;</li>
                            <li>MozillaFirefox;</li>
                            <li>Microsoft Internet Explorer 11 (partiellement).</li>
                          </ul>

                          <h4>Navigateurs mobiles</h4>
                          <p>Etralis prend en charge les dernières versions des navigateurs suivants sur les appareils mobiles.</p>
                          <ul>
                            <li>Google Chrome;</li>
                            <li>Safari d'Apple ;</li>
                            <li>Mozilla Firefox.</li>
                          </ul>
                          
                          <h4>Éditeur en ligne</h4>
                          <p>L'éditeur Etralis prend en charge les dernières versions de Chrome, Safari pour Mac OS et Firefox.</p>
                        </div>
                      </details>

                      <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <summary itemprop="name"><strong>Puis-je faire des achats de matériel en ligne dans ce site?</strong></summary>
                          <div class="details-expanded" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                          <p>Pour l'instant, la partie dédiée aux achats de matériel en ligne n'est pas encore disponible sur etralis.com, mais elle est en cours d'implémentation et sera disponible en mars.</p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </section>
              </main>
            <Footer />
        </>
    );
};

export default Faq;