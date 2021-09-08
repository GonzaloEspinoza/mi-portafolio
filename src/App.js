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

function App() {
  
  SendVisit()
  


  const location = useLocation()
  
  return (
    <motion.div initial={{width:'0'}}  animate={{width:'100%'}} transition={{delay:1, motion:3}} className="App">

      <Navbar location={location} />
      {/* <Router> */}
        <Switch>
          <Route exact path="/"  >
                    <Home location={location}  />
          </Route>
          <Route path='/nosotros'>
            <SobreNosotros location={location} />
          </Route>
          <Route path="/portafolio">
            <Portafilio location={location}></Portafilio>
          </Route>
     
        </Switch>
      {/* </Router> */}
      <RedesSociales location={location}></RedesSociales>
    </motion.div>
  );
}

export default App;
