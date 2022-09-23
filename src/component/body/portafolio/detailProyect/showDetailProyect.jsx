import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import './showDetailProyect.css'

const ShowDetailProyec=({closeModal, modalState, objectProtect})=>{
    return(
        <>
        <AnimatePresence>
        
        {
        modalState &&
        <motion.div exit={{opacity:0}} initial={{opacity:0}}  animate={{opacity:1}}  id="scroll-y"  className="fixed z-30 top-0 left-0 bottom-0 w-full h-full bg-white bg-red-400 h-full flex items-center justify-center py-20">
            
                {/* <div   className="bg-indigo-400 flex justify-center"> */}
                   
                    <motion.div exit={{y:900}} initial={{y:900}} animate={{y:0}} transition={{duration:0.6}} className="bg-white rounded-lg w-11/12 sm:w-5/6 md:w-3/4 py-3 px-4 my-auto" >
                        <div className=" flex justify-between">
                            <h4 className="font-semibold" >{objectProtect.title}</h4>
                            <button onClick={closeModal} type="button" className="my-2 md:m-2"  aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>  
                        <div className="flex justify-center">

                            <div className="w-full h-full my-auto ">
                                <div className="grid grid-rows-1 md:grid-cols-2">
                                    <div className="col-lg-6">
                                        {/*Carousel Wrapper*/}
                                        <div id="carousel-thumb" className=" carousel-fade carousel-thumbnails" data-ride="carousel">


                                            <div className="example z-depth-5 text-center" role="listbox">
                                                <div className="carousel-item active example  z-depth-3  ">
                                                   {
                                                    objectProtect.architecture.url_images.length>0? <img className="d-block w-100 mb-5" src={objectProtect.architecture.url_images[0]} alt="First slide" />:''
                                                   }
                                                    {
                                                        objectProtect.simpleDiagram.url_image.length>0?<img className="d-block w-100 mb-5" src={objectProtect.simpleDiagram.url_image[0]} alt="First slide" />:''
                                                    }
                                                    <img className="d-block w-100 mb-5" src={objectProtect.url} alt="First slide" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" px-4 my-10 md:my-0 text-left">
                                        <div className='description-content'>

                                        <h4 className="">
                                            <strong className="">Descripción del proyecto:</strong>
                                        </h4>

                                        <div className=""  aria-multiselectable="true">
                                            {/* Accordion card */}
                                            <div className="pb-2 mb-3">

                                                {/* Card body --> description*/}
                                                <div id="collapseOne1" role="tabpanel" aria-labelledby="headingOne1" >
                                                    <div className="card-body text-left pt-2">
                                                        {objectProtect.description}
                                                        {/* HIRE DESCRIPTION */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion */}

                                            <h3 className="my-2">
                                                <strong>Herramientas utilizadas:</strong>
                                            </h3>
                                            <div className="">
                                                <div className="card-body text-left text-dark h6">
                                                    {objectProtect.herramientas}
                                                    {/* HIRE HERRAMIENTAS  */}
                                                </div>
                                            </div>

                                            <h5 className="mt-4">
                                                <strong>Links del proyecto y github</strong>
                                            </h5>
                                            {
                                               objectProtect.credenciales_acceso.user!=''? <div>
                                                    <h5>Require credenciales de acceso:</h5>
                                                    <h5>User : {objectProtect.credenciales_acceso.user}</h5>
                                                    <h5>Password : {objectProtect.credenciales_acceso.password}</h5>
                                                </div>:''
                                            }
                                         
                                            <div className="">
                                                <div className="flex relative gap-3 my-5">
                                                    <a className="parent-info flex  hover:text-blue-900 text-blue-700" href={objectProtect.url_del_sitio} target="_blank">
                                                        <i class="fas fa-2x fa-external-link-square-alt"></i>
                                                        <div className="info-text px-2 rounded-lg">
                                                            Visitar sitio web
                                                        </div>
                                                    </a>

                                                   <div>
                                                   <a className="parent-info" href={objectProtect.url_github_repositorio} target="_blank">
                                                        <i className="fab fa-2x fa-github"></i>
                                                        <div className="info-text px-2 rounded-lg">
                                                            Ir al repositorio del proyecto
                                                        </div>
                                                    </a>
                                                   </div>
                                                    
                                                </div>
                                            </div>


                                        </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </motion.div>
                {/* </div> */}

        </motion.div>
        }
            
        </AnimatePresence>
        </>
    )
}

export default ShowDetailProyec;