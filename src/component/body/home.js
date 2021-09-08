import React, { useState, useEffect } from 'react'
import {motion, AnimatePresence } from 'framer-motion';
import './home.css'
import './img.css'

import svgAmorfa from '../../assets/svg/figuraAmorfa.svg'



import svg_group_team from './img/project_team.svg'

// importar archivo de configuracion
import PORTAFOLIO from './data'


import CounterVisits from '../countedVisit/counterVisit';


const Home = ({ location }) => {


  return (
      
      <motion.div  exit={{opacity:0, y:-500}} key='nosotros'  id="carousel-example-1z" className="" data-ride="carousel">

        <div className="  carousel-inner" role="listbox">
          <div className=" carousel-item active">
            <div className="img-header ">
              {/* <img width="100%" height='100%' src="https://mdbootstrap.com/img/Photos/Others/images/91.jpg" /> */}

              <div className="grid gird-cols-1 md:flex h-full mask rgba-black-light align-items-center">
                
                <div style={{zIndex:'2'}}  className="visible md:hidden my-auto mt-28 mb-10  w-full">
                  <div className=" w-full  flex justify-center">
                    <motion.img exit={{opacity:200}}  initial={{opacity:0, scale:2}} animate={{opacity:1, scale:1}} transition={{delay:0.6}} className="rounded-full bg-green-400" width="200" height="200" alt="" />
                  </div>
                </div>
        
                <motion.div exit={{rotate:360}} initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{motion:0.5}} style={{zIndex:'2'}} className=" w-full :pl-auto sm:pl-10 my-auto presentacion text-center  wow">
                    {/* <p className="text-left pl-16">Soy</p> */}
                    <p className="text-center text-title sm:text-left pl-auto sm:pl-16">¡Hola! soy Gonazalo</p>
                
                    <h1 className="mb-4">
                      <strong className="title-page text-title"><span className="text-gray-700" >SOY DESARROLLADOR </span> FULL STACK.</strong>
                    </h1>
                    {/* <p className="subtitulo wow fadeInUp">
                      <strong>Diseñamos y desarrollamos sitios web</strong>
                      <br />
                      <strong>Le damos vida a esa idea que ronda por tu mente</strong>
                    </p> */}
                    {/*                     
                        <p className="mb-4 d-none d-md-block">
                            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                            available. Create your own, stunning website.</strong>
                        </p> */}
                    {/* https://wa.me/numerodetelefonodewhatsapp/?text=urlencodedtext */}
                  
                </motion.div>
                
                <div style={{zIndex:'2'}}  className="invisible md:visible my-auto w-full">
                  <div className=" w-full  flex justify-center">
                    <motion.img exit={{opacity:200}}  initial={{opacity:0, scale:2}} animate={{opacity:1, scale:1}} transition={{delay:0.6}} className="rounded-full bg-green-400" width="200" height="200" alt="" />
                  </div>
                </div>
        

              </div>

            </div>
          </div>

          {/* <div className="carousel-item">
            <div className="img-header2 view">

              <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

                <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                    <strong className="title-page">CONVIRTIENDO IDEAS</strong>
                    </h1>

                    <p className="subtitulo">
                    <strong>Diseñamos y desarrollamos sitios web</strong>
                    <br />
                    <strong>Le damos vida a esa idea que ronda por tu mente</strong>
                    </p>

                    <a target="_blank" href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza" className="solicitar-info btn btn-outline-white btn-lg">Solicita informacion
                    <i className="fab fa-whatsapp pl-2"></i>
                    </a>
                </div>

              </div>

            </div>
          </div> */}

        </div>
      </motion.div>
      )

}

export default Home;