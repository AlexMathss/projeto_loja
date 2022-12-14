import React from "react";
import Home from '../Pages/Home';
import About from "../Pages/About";
import Services from "../Pages/Services";
import Portifolio from "../Pages/Portifolio";
import Princing from "../Pages/Princing";
import Comments from "../Pages/Comments";
import Footer from "../Pages/Footer";

export default function Routes() {
    return (
      <>
          <Home/>
          <About/>
          <Services/>
          <Portifolio/>
          <Princing/>
          <Comments/>
          <Footer/>
      </>
    );
  }