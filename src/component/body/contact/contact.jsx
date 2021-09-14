import React from 'react';
import {motion} from 'framer-motion'

import './contact.css'

const Contact = () =>{

    return(
        <>
            <section className="content-contact my-32">
                <motion.div initial={{y:90,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="my-20 bg-red-30 h-full">
                    <h1 className="text-2xl font-bold text-left mx-20">Contact</h1>
                    <div id="text-recomendation" className="bg-gray-100 mx-20 my-2 py-3 "> <h2 className="mx-20">Si tienes una idea en mente, un poryecto o simplemente quieres automatizar algun proceso de tu negocio o emprendimiento no dudes en escribirnos 👇</h2></div>
                    <div className="flex mx-20  bg-red-20 h-full"> 
                        <div className="flex justify-center items-center bg-gray-100 w-full">
                            <h2 className="text-5xl font-bold">Es momento de hablar de tu proyecto</h2>
                        </div>
                        <div className="bg-gray-100 w-full grid grid-cols-2 gap-1 justify-center items-center">
                            <div className="bg-red-20">
                                <h1 className="text-lg font-semibold my-4">Nos puedes encontrar</h1>
                                <div className="grid grid-cols-3">
                                    <motion.a whileHover={{scale:0.9}} whileTap={{scale:1.1}} className="mx-auto" href="mailto:gonis1990@gmail.com" target="_blank">
                                        <img src="https://img.icons8.com/nolan/64/email.png"/>
                                    </motion.a>
                                    <motion.a whileHover={{scale:0.9}} whileTap={{scale:1.1}} className="mx-auto" href="https://www.facebook.com/rootgonzalo" target="_blank">
                                        <img src="https://img.icons8.com/nolan/64/facebook.png"/>
                                    </motion.a>
                                    <motion.a whileHover={{scale:0.9}} whileTap={{scale:1.1}} className="mx-auto" href="https://t.me/gonzaloespinoza" target="_blank">
                                        <img src="https://img.icons8.com/nolan/64/telegram-app.png"/>
                                    </motion.a>
                                </div>
                            </div>
                            <div className="bg-red-20">
                                <h1 className="text-lg font-semibold my-4">Nuestro Whatsapp personal</h1>
                                <div className="flex justify-center">
                                    <motion.a whileHover={{scale:0.9}} whileTap={{scale:1.1}} target="_blank" href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza" className="solicitar-info btn btn-outline-white btn-lg">
                                        <img src="https://img.icons8.com/nolan/64/whatsapp.png"/>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </motion.div>
            </section>
        </>
    )
}


export default Contact;