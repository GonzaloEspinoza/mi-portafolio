import React from 'react';
import './App.css';

import Home from './component/body/home'

// pruebas 

import {ParallaxHome} from './component/pruebas/ParallaxHome'
import {PaginaModerna} from './component/paginas-modernas/pagina-moderna'
import SendVisit from './component/countedVisit/senVisit'

function App() {
  
  SendVisit()
  return (
    <div className="App">
      
      <Home/>

    {/* <ParallaxHome/> */}

    {/* <PaginaModerna/> */}


    </div>
  );
}

export default App;
