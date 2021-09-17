import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './menuDesplegable.css'
const MenuDesplegable =({ShowMenu, menView})=>{

    return(
        <>
        <AnimatePresence>
            {
                menView &&
                <motion.div key="navbar-menu" exit={{x:900}}  initial={{x:900 }} animate={{x:0}} transition={{delay:0.1, duration:0.6, staggerChildren:0.5}}  className="container-menu-demplegable fixed bg-white h-full w-full top-0 left-0 button-0" id="content-menu-flotante">
                    <div  className="flex justify-end mx-4 font-semibold mt-5" >
                        <svg onClick={ShowMenu} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div className="bg-white flex justify-center h-full items-center m-2">
                        <ul className="text-gray-500 my-auto w-full mx-3">
                            <Link  to="/"  className="">
                                <motion.li whileTap={{scale:0.9}} onClick={ShowMenu} className="bg-blue-600  relative rounded-full w-full py-2 my-2  text-white font-bold ">
                                    Home
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    
                                </motion.li>
                            </Link>
            
                            <Link to="/nosotros">
                                <motion.li whileTap={{scale:0.9}} onClick={ShowMenu} className="bg-blue-600  relative rounded-full w-full py-2 my-2 text-white font-bold ">
                                        About
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.li>
                            </Link>

                            <Link onClick={ShowMenu} to="/skills">
                                <motion.li whileTap={{scale:0.9}} onClick={ShowMenu} className="bg-blue-600  relative rounded-full w-full py-2 my-2 text-white font-bold ">
                                        Skill
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.li>
                            </Link>

                            <Link onClick={ShowMenu} to="/portafolio">
                                <motion.li whileTap={{scale:0.9}} onClick={ShowMenu} className="bg-blue-600  relative rounded-full w-full py-2 my-2 text-white font-bold ">
                                        Portafolio
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.li>
                            </Link>

                            <Link onClick={ShowMenu} to="/contact">
                                <motion.li whileTap={{scale:0.9}} onClick={ShowMenu} className="bg-blue-600  relative rounded-full w-full py-2 my-2 text-white font-bold ">
                                        Contact
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.li>
                            </Link>
                        
                        </ul>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        </>
    )
}

export default MenuDesplegable;