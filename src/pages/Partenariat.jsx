import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Partenariat = () => {
    return (
        <>
            <Header />
            <Sidebar />
        <main>
		<div id="marge"></div>
			<section className="section-blog section-blog-article">
				<div id='ref'><a href="/">Accueil</a>/Partenariat</div>
				<div className="inner">
            <div className="container">
			<div className="body">
                <h1>Nos Partenaires</h1>
                <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681487119/Camtrack_nbvvji.png" href="img1"/>
                        <div class="details">
                            <div class="content">
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681487893/Logo-MEDIPLUS_y3cgrd.svg" href="img2"/>
                        <div class="details">
                            <div class="content">
                            </div>
                        </div>
                    </div>
                        <div class="slide">
                            <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681488368/Rigolaz_zxk0gy.svg" href="img3"/>
                            <div class="details">
                                <div class="content">
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                        <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681487119/Camtrack_nbvvji.png" href="img1"/>
                        <div class="details">
                            <div class="content">
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681487893/Logo-MEDIPLUS_y3cgrd.svg" href="img2"/>
                        <div class="details">
                            <div class="content">
                            </div>
                        </div>
                    </div>
                        <div class="slide">
                            <img src="https://res.cloudinary.com/do8lyndou/image/upload/v1681488368/Rigolaz_zxk0gy.svg" href="img3"/>
                            <div class="details">
                                <div class="content">
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                    </div>
                </div>
                </div>
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

export default Partenariat;