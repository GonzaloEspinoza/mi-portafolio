import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import { motion } from 'framer-motion'
import './App.css';

import Home from './component/body/home'

// pruebas 

import SendVisit from './component/countedVisit/senVisit'
import Navbar from './component/navbar/navba';
import SobreNosotros from './component/body/sobre-nosotros/sombre-nosotros';
import RedesSociales from './component/body/contactoRedesSociales/redesSiciales/redesSociles';
import Portafilio from './component/body/portafolio/portafolio';
import Skills from './component/body/skills/skills';
import Contact from './component/body/contact/contact';
import ContentBlog  from './component/myBlog/content_blog/contentBlog';

function App() {
  
  SendVisit()
  


  const location = useLocation()
  
  return (
    <div className="App">

      <Navbar location={location} />
      {/* <Router> */}
        <Switch>
          <Route exact path="/"  >
                    <Home location={location}  />
          </Route>
          <Route path="/blog">
              <ContentBlog location={location}></ContentBlog>
          </Route>
          <Route path="/skills">
            <Skills location={location}></Skills>
          </Route>
          <Route path='/nosotros'>
            <SobreNosotros location={location} />
          </Route>
          <Route path="/contact">
            <Contact location={location}></Contact>
          </Route>
          <Route path="/portafolio">
            <Portafilio location={location}></Portafilio>
          </Route>
        </Switch>
      {/* </Router> */}
      <RedesSociales location={location}></RedesSociales>
    </div>
  );
}

export default App;
