import React,{useState,useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const RedesSociales =({location})=>{


    const [showRedesSociales, setShowRedesSociales] = useState({
        1:'github',
        2:'linkedin',
        3:'whatsapp',
        4:'instagram',
        5:'telegram',
        6:'facebook',
        7:'youtube'
    })
    useEffect(() => {
        console.log(location.pathname)
        switch(location.pathname){
            case '/':
                setShowRedesSociales({
                    1:'github',
                    2:'linkedin',
                   
                })
                break
            case '/portafolio':
                setShowRedesSociales({ 
                    1:'github',
                    2:'linkedin',
                    7:'youtube'
                })
                break
            default: 
                setShowRedesSociales({})
                break;
            
        }
    }, [location]);

    const [lastYPost, setLastYPosit] = useState(0)
    const [actionScroll, setActionScroll] = useState(true)

    useEffect(() => {
        const showIcons=()=>{
            setActionScroll(window.scrollY<lastYPost)
            setLastYPosit(window.scrollY)
        }
        window.addEventListener('scroll',showIcons,false);

        return()=>{
            window.removeEventListener('scroll',showIcons, false)
        }
    }, [lastYPost]);


    return(
        <>
                <AnimatePresence>
            {
                actionScroll && JSON.stringify(showRedesSociales)!=='{}' &&
                        <motion.div 
                        exit={{opacity:0}} 
                        initial={{opacity:0}} 
                        animate={{opacity:1}} 
                        transition={{duration:1,delay:0}} 
                        className="fixed flex justy-center  bottom-10  left-0 h-auto w-auto mx-10">
                        <div className="h-full w-full  rounded-lg px-4 py-1">
                            <ul className="my-auto flex gap-x-2 justify-center">
                                {
                                    showRedesSociales[1] &&
                                    <a href="https://github.com/GonzaloEspinoza" className="hover:text-gray-800" target="_blank">
                                    <i class="fab fa-2x fa-github"></i>
                                    </a>
                                }
                                {
                                    showRedesSociales[2] &&
                                    <a href="https://www.linkedin.com/in/gonzaloespinozach/" className="hover:text-blue-800" target="_blank">
                                    <i class="fab fa-2x fa-linkedin"></i>
                                    </a>
                                }
                                {
                                    showRedesSociales[3] &&
                                    <a className="hover:text-green-600" target="_blank"  href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza">
                                    <i className="fab fa-2x fa-whatsapp"></i>
                                    </a>
                                }
                                {
                                    showRedesSociales[4] &&
                                    <a href="https://www.instagram.com/spinozagonzalo/" className="hover:text-red-600" target="_blank">
                                    <i className="fab fa-2x fa-instagram"></i>
                                    </a>
                                }
                                {
                                    showRedesSociales[5] &&
                                    <a href="https://t.me/gonzaloespinoza" className="hover:text-blue-600" target="_blank">
                                    <i class="fab fa-2x fa-telegram-plane"></i>
                                    </a>
                                }

                               {
                                    showRedesSociales[6] &&
                                    <a href="https://www.facebook.com/rootgonzalo" className="hover:text-blue-800" target="_blank">
                                        <i class="fab fa-2x fa-facebook-square"></i>
                                    </a>
                               }
                                {
                                    showRedesSociales[7] &&
                                    <a href="https://www.youtube.com/channel/UCeLQMKaL3FpKxr1Wca79P5w" className="hover:text-red-500" target="_blank">
                                    <i class="fab fa-2x fa-youtube"></i>
                                    </a>
                                }
                              
                            </ul>
                        </div>
                    </motion.div>
            }
                </AnimatePresence>
        </>
    )
}

export default RedesSociales;