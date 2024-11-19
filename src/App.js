
//import './App.css';
import "./assets/style.css";
import Aside from './components/asside/Aside';
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Cv from "./components/cv/Cv";
import Portfolio from "./components/portfolio/Portfolio";

import React, { useState } from 'react';
import Contact from "./components/contact/Contact";



function App() {

  const [pageActive, setPageActive] = useState('about');

  const changePage = (page) => {
    setPageActive(page);
  };

  return (
    <main>
      <Aside />
      <div className="main-content">
        <Navbar pageActive={pageActive} changePage={changePage} />
        <About  pageActive={pageActive} />
        <Cv  pageActive={pageActive} />
        <Portfolio pageActive={pageActive} />
        <Contact pageActive={pageActive} />
      </div>
     
    </main>
  );
}

export default App;
