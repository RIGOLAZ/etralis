import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { backward } from '../data';

const Localisation = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <section className="section-blog section-blog-article">
                <div id='ref'><a href="/">Accueil</a>/Localisation</div>
                  <div className="inner">
                  <div className="container">
                    {/* <!-- article body  --> */}
                    <div className="body">
                    </div>
                  </div>
                </div>
              </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.7493796289212!2d9.702845635853695!3d4.02242797780315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1673696289968!5m2!1sfr!2scm" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </main>
            <Footer />
        </>
    );
};

export default Localisation;