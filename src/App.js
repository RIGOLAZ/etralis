import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import InfoAppli from './pages/InfoAppli';
import Partenariat from './pages/Partenariat';
import Electricite from './pages/Electricite';
import Avionique from './pages/Avionique';
import Electromecanique from './pages/Electromecanique';
import Informatique from './pages/Informatique';
import Domotique from './pages/Domotique';
import FroidClimatisation from './pages/FroidClimatisation';
import Plomberie from './pages/Plomberie';
import VideoSurveillance from './pages/VideoSurveillance';
import Chaudronnerie from './pages/Chaudronnerie';
import BtpUrbanisme from './pages/BtpUrbanisme';
import QuiSommesNous from './pages/QuiSommesNous';
import OffreEmploi from './pages/OffreEmploi';
import Faq from './pages/Faq';
import Localisation from './pages/Localisation';
import TrxPgr from './components/TrxPgr';
import Termes from './pages/Termes';
import Confidentialite from './pages/Confidentialite';

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/info-appli' element={<InfoAppli/>}/>
          <Route path='/partenariat' element={<Partenariat />} />
          <Route path='/electricite' element={<Electricite />} />
          <Route path='/avionique' element={<Avionique />} />
          <Route path='/informatique' element={<Informatique />} />
          <Route path='/electromecanique' element={<Electromecanique/>} />
          <Route path='/domotique' element={<Domotique/>} />
          <Route path='/froid-et-climatisation' element={<FroidClimatisation />} />
          <Route path='/plomberie' element={<Plomberie />} />
          <Route path='/video-surveillance' element={<VideoSurveillance />} />
          <Route path='/chaudronnerie' element={<Chaudronnerie />} />
          <Route path='/btp' element={<BtpUrbanisme />} />
          <Route path='/qui-sommes-nous' element={<QuiSommesNous />} />
          <Route path='/partenariat' element={<Partenariat />} />
          <Route path='/offre-d-emploi' element={<OffreEmploi />} />
          <Route path='/foire-aux-questions' element={<Faq />} />
          <Route path='/localisation' element={<Localisation />} />
          <Route path='/travaux-programmes' element={<TrxPgr />}/>
          <Route path='/termes' element={<Termes />} />
          <Route path='/confidentialite' element={<Confidentialite />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;