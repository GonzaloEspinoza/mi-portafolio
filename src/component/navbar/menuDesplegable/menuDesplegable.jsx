import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const MenuDesplegable =({ShowMenu, menView})=>{

    return(
        <>
        <AnimatePresence>
            {
                menView &&
                <motion.div key="navbar-menu" exit={{x:900}}  initial={{x:900 }} animate={{x:0}} transition={{delay:0.1, duration:0.6, staggerChildren:0.5}}  className="fixed bg-green-700 h-screen w-full top-0 left-0 button-0" id="content-menu-flotante">
                    <div  className="flex justify-end mx-4 font-semibold mt-5" >
                        <svg onClick={ShowMenu} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div className="bg-white flex justify-center h-full m-2">
                        <ul className="text-gray-500 m-auto">
                            <li>this a text option</li>
                            <li>this a text option</li>
                            <li>this a text option</li>
                            <li>this a text option</li>
                        </ul>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        </>
    )
}

export default MenuDesplegable;