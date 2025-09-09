import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home.jsx";
import Vision from './Components/Pages/Vision.jsx';
import AmruthaMahotsava from "./Components/Pages/Amrutha.jsx";
import Principal from './Components/Pages/Principal.jsx';
import Contact from './Components/Pages/ContactUs.jsx';
import Manage from './Components/Pages/Management.jsx';
import History from './Components/Pages/History.jsx';
import Gallery from "./Components/Pages/Gallary.jsx";
import HeaderSection from "./Components/HeaderNavigation.jsx";
import Foot from "./Components/FooterTab.jsx";
import Apply from "./Components/Pages/Apply.jsx";
import LogOut from "./Components/Pages/LogOut.jsx";
import Rank from "./Components/Pages/RankList.jsx";
import ScrollToTop from "./Components/SlideTop.jsx";
import ScrollUpButton from "./Components/ScrollUpButton.jsx";
import Swc from "./Components/Pages/Swc25.jsx"


import "./index.css";

function App() {
  return (
    <>
      <HeaderSection />
      <ScrollToTop/>
        
      <Routes>
        
       <Route path="/" element={<Home />} />

         <Route path="/home" element={<Home />} />
        
        <Route path="/apply" element={<Apply />} />
        <Route path="/amrutha-mahotsava" element={<AmruthaMahotsava />} />
        <Route path="vision_mission" element={<Vision />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<Manage />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/history" element={<History />} />
         <Route path="/ranklist" element={<Rank/>} />
        <Route path="/logout-event" element={<LogOut />} />
        <Route path="/swc25" element={<Swc />} />
        

      </Routes>


        <ScrollUpButton/>
        <Foot />
      


    </>
  );
}

export default App;