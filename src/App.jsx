// import { useState } from 'react'
import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe/>
      <Services/>
      <Expertise/>
      <Footer/>
    </>
  );
}

export default App;
