import React, {useState, useEffect }from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import DATA from '../data';
import DATA_BACKEND from '../dataBackend'

import './portafolio.css'
import './backendProyects/backendProjects.css';

import ShowDetailProyec from './detailProyect/showDetailProyect'
import DetailBackend from './backendProyects/detaildBackend.';

const Portafilio =({location})=>{


  console.log('location---');
  console.log(location);
  console.log('location---');

  const [modalState, setModalState] = useState(false)
  const [dataProyect, setDataProyect] = useState(DATA.portafolio[0])

  const [dataBackend, setDataBackend] = useState(DATA_BACKEND[0]);
  const [showModalBackend, setShowModalBackend] = useState(false); 

  const showModal =(dataP)=>{
    setModalState(!modalState)
    setDataProyect(dataP)
  }

  const closeModal=()=>{
    console.log('--close moadal--')
    setModalState(
      !modalState
    )
  }

  const showModalB=(dataB)=>{
    setShowModalBackend(!showModalBackend);
    setDataBackend(dataB);
  }
  const closeModalB=()=>{
    setShowModalBackend(!showModalBackend);
  }

    return(
        <>
            <div className="content-portafolio"></div>
            <div  className="pt-14 min-h-full mb-32">
            <section id="portafolio">
              <div className="bg-green-30 container mx-auto text-center sm:text-left  pt-10 sm:pt-10">
                <h2 className="my-5 mx-2 sm:mx-32  text-lg font-bold">MI PORTAFOLIO</h2>
              </div>
              <div id="conten-items-proyects" className="bg-indigo-30 my-1 ms:mx-10 md:mx-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center py-10">


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
                              <div className="info invisible md:visible cursor-pointer">
                                <h3 className="pb-4">{d.title}</h3>
                                <div className='detail-proyeto'>
                                  <h4 className="text-yellow-500">Ver detalle</h4>
                                </div>
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
          {/* <section className='portafolio'>
              <div className='md:ml-10 md:mb-60 min-h-screen'>
                <h2 className='bg-gray-500	  sm:mx-32  text-center md:text-lg font-bold text-left '>Backend</h2>
                <div className='content-card-data-bacekdmd bg-indigo-30 my-1 ms:mx-10 md:mx-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center py-10'>
                  {
                    DATA_BACKEND.map((d,i)=>{
                      return    <motion.div onClick={()=>showModalB(d)} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:i}}  className="bg-gray-100 my-5 img_center">
                      <div class="row img_center">
                        <div class="ih-item circle effect6 scale_up example z-depth-4 img_center ">
                          <a data-toggle="modal" data-target={`#modal${d.numero}`} >
                            <div className="img">
                              <img className="img-src" src={d.url_min_image} alt="img" />
                            </div>
                            <div className="info invisible md:visible cursor-pointer">
                              <h3 className="pb-4">{d.title}</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    })
                  }
                </div>
              </div>
          </section>
          <DetailBackend dataB={dataBackend} stateModal={showModalBackend} closeModalB={closeModalB} ></DetailBackend>
           */}
        </>
    )
}

export default Portafilio;