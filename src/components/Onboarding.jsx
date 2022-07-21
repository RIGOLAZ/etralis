import React from 'react';

const Onboarding = () => {
    return (
        <div className='welcome'>
            <p className='welBloc1'>PLUS DE VISIBILITE</p>
            <p>Rechargez votre compteur prépayé </p> 
            <p>prépaiement,</p><p>Suivez vos consommations.</p><br />
            <div className='welBloc2'>DEVENEZ AUTONOME<br /><span>Gagnez en temsp. Fini le rang. Tout se passe ici.</span></div><br />
            <div className='welBloc3'>CHOIX MULTIPLE<br /><span>Choisissez votre canal d'achat préféré.</span></div>
            <img className='imgOnboard' src="https://res.cloudinary.com/do8lyndou/image/upload/v1653497780/onboarding1-large_siz1nj.svg" alt="bienvenue" />
        </div>
    );
};

export default Onboarding;