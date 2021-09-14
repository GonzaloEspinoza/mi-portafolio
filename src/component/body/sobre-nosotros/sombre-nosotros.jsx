import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import './animation-framer-react.css'

const SobreNosotros = ({ location }) => {


    console.log(location)

    useEffect(() => {
        if (location.pathname === '/nosotros') {
            window.scrollTo(0, 0)
        }
    }, [location]);

    return (

        location.pathname === "/nosotros" &&
        <div id="content-nosotros" className="bg-green-20 my-20 min-h-screen top-0 left-0">

            <div className="mt-20"><h1 className="text-2xl text-left mx-20 font-semibold">About</h1></div>
            <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -900 }}
                transition={{ motion: 2 }}
                className="bg-red-20 min-h-screen mx-0 sm:mx-20  flex justify-center"
            >
                <div className="bg-gray-30 grid grid-rows-1 md:grid-cols-2  contenedor-nosotros   bg-gray-">
                    <div className="bg-gray-9 flex justify-center w-fulll h-full">
                          <div className="my-auto bg-indigo- ">
                                <div >
                                    <motion.h3 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}}  transition={{delay:0.5}} className="text-center text-lg">Hola, a qui mi breve informacion</motion.h3>
                                </div>
                                <div>
                                    <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-4xl sm:text-5xl inline-block align-top leading-normal font-semibold text-indigo">
                                        Desarrollando con pasión, mientras exploras el mundo
                                    </motion.h1>
                                    <br />
                                </div> 
                          </div>
                    </div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8, motion:0.3}} className="bg-red-80 col-md-12 h-full flex justify-center  py-20 mb-4 pl-4 pr-4 ">
                       <div className="my-auto">
                            <p className="text-lg"  >
                                ¡Hola! Soy desarrollador fullstack me dedico al diseño y desarrollo de aplicaciones y páginas web, gracias a mi experiencia puedo crear páginas web eficientes y optimizadas para obtener los mejores resultados, adaptadas a las necesidades de tu empresa, producto o servicio.
                            </p>
                            <br />
                       </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* <div className="mx-20">
                <div className="bg-indigo-200">
                    skills
                </div>
            </div> */}
        </div>

    );
}



export default SobreNosotros


