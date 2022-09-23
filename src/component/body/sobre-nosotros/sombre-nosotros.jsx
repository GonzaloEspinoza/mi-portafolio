import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import './animation-framer-react.css'
import developerSvg from '../img/assets/svg/developer.svg';
import formationAcademy from '../img/assets/svg/formationAcademy.svg'

const SobreNosotros = ({ location }) => {

    console.log('--------')

    console.log(location)
    console.log('--------')

    useEffect(() => {
        if (location.pathname === '/nosotros') {
            window.scrollTo(0, 0)
        }
    }, [location]);

    return (

        location.pathname === "/nosotros" &&
        <div id="content-nosotros" className="bg-green-20 my-20  top-0 left-0">

            <div className="mt-20 mb-10"><h1 className="text-2xl text-left mx-2 md:mx-20 font-semibold">About</h1></div>
            <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -900 }}
                transition={{ motion: 2 }}
                className="bg-red-20  mx-0 sm:mx-20  flex justify-center"
            >
                <div className="bg-red-30 bg-gray-10 grid grid-cols-1 md:grid-cols-2 contenedor-nosotros   bg-gray-">
                    <div className="bg-indigo-90 flex justify-center w-fulll h-full">
                          <div className="my-auto bg-indigo- ">
                    
                                <div className="py-5">
                                    <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-4xl sm:text-5xl inline-block align-top leading-normal font-semibold text-indigo">
                                        Desarrollando con pasión, mientras exploras el mundo
                                    </motion.h1>
                                    <br />
                                </div> 
                          </div>
                    </div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8, motion:0.3}} className="bg-red-80 my-4 col-md-12 h-full flex justify-center   mb-4 pl-4 pr-4 ">
                       <div className="my-auto">
                            <p className="text-lg"  >
                                ¡Hola! Soy desarrollador fullstack me dedico al diseño y desarrollo de aplicaciones y páginas web, gracias a mi experiencia puedo crear páginas web eficientes y optimizadas para obtener los mejores resultados, adaptadas a las necesidades de tu empresa, producto o servicio.
                            </p>
                            <br />
                       </div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="mx-2 md:mx-20 grid grid-cols-1 md:grid-cols-2 mt-10">
                <div>
                    <h2 className="visible md:invisible text-lg font-semibold text-left text-blue-700 my-5">Experiencia</h2>

                    <img className="mx-auto" src={developerSvg} width="300" height="300" alt="" />
                </div>
                <div className=" p-3">
                    <h2 className="invisible md:visible text-lg font-semibold text-left text-blue-700 my-5">Experiencia</h2>
                    <ul  className="  list-disc list-inside text-left">
                        <li>Desarrollo de aplicaciones web con Html, Css, Bootstrap, TailwindCss, framer-motion, reactjs y Redux</li>
                        <li>Desarrollo de aplicaciones backend (Api-rest) con Nodejs, expreess, MongoDB, postgreSQL y Docker</li>
                        <li>Despliegue de aplicacinoes en Firebase, Amazon Web Services y Heroku</li>
                        <li>Control de versiones git, github,</li>
                        <li>Otros: figma, Notion, photoshop, S.O Windows, Linux</li>
                    </ul>
                </div>
            </div>

            <div className="mx-2 md:mx-20 grid grid-cosl-1 md:grid-cols-2 mt-10">

                <div className="visible md:hidden p-3">
                    <h2 className=" text-lg font-semibold text-left text-blue-700 my-5">Formación academíca</h2>
                    <img className="mx-auto" src={formationAcademy} width="300" height="300" alt="" />
                </div>
                <div className="">
                    <h2 className="invisible md:visible text-lg font-semibold text-left text-blue-700 my-5">Formación academíca</h2>
                    <ul  className="list-disc list-inside text-left">
                        <li>Grado alcanzado: Bachiller <span className="text-gray-400"> Col. Mariscal Andres de Santa Cruz</span></li>
                        <li>Grado alcanzado: Ingeniero de sistemas <span className="text-gray-400"> Universidad Autónoma Tomás Frias</span> </li>
                    </ul>
                </div>
                <div className="invisible md:visible p-3">
                    <img className="mx-auto" src={formationAcademy} width="300" height="300" alt="" />
                </div>
            </div>
        </div>

    );
}



export default SobreNosotros


