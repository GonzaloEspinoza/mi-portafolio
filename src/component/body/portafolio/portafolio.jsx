import React, {useState, useEffect }from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import DATA from '../data'
import './portafolio.css'
import ShowDetailProyec from './detailProyect/showDetailProyect'

const Portafilio =()=>{

  const [modalState, setModalState] = useState(false)
  const [dataProyect, setDataProyect] = useState(DATA.portafolio[0])

  const showModal =(dataP)=>{
    console.log(dataP)
    setModalState(!modalState)
    setDataProyect(dataP)
  }

  const closeModal=()=>{
    console.log('--close moadal--')
    setModalState(
      !modalState
    )
    console.log(modalState)
  }

    return(
        <>
            <div className="pt-14 min-h-full mb-32">
            <section id="portafolio">
              <div className="text-left">
                <h2 className="my-5 mx-10">MI PORTAFOLIO</h2>
              </div>

              <div id="conten-items-proyects" className="bg-indigo-30 my-1 ms:mx-10 md:mx-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center py-20">


                {
                  DATA.portafolio.map((d, i) => {

                    return (
                      <motion.div onClick={()=>showModal(d)} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:i}}  className="my-5 img_center">
                        <div class="row img_center">
                          <div class="ih-item circle effect6 scale_up example z-depth-4 img_center ">
                            <a data-toggle="modal" data-target={`#modal${d.numero}`} >
                              <div className="img">
                                <img className="img-src" src={d.url_min} alt="img" />
                              </div>
                              <div className="info cursor-pointer">
                                <h3 className="pb-4">{d.title}</h3>
                              </div>
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )
                  })
                }

            </div>
            </section>
            
                <ShowDetailProyec closeModal={closeModal} modalState={modalState}  objectProtect={dataProyect}  /> 
   
        </div>
        </>
    )
}

export default Portafilio;