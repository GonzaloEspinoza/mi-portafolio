import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import MenuDesplegable from './menuDesplegable/menuDesplegable';

const Navbar = ({location}) => {

    console.log('navbar-component-location');
    console.log(location);
    console.log('navbar-component-location');
    
    const [textColor, setTextColor] = useState({color:'white'});
    const MyRefMenu = React.useRef();
    const [menView, setMenuView] = useState(false)


    useEffect(()=>{
        switch(location.pathname){
            case "/nosotros":
                return setTextColor({color:'#2b2c34'});
          
            default: return setTextColor({color:'#2b2c34'})
            }
    },[location])

    const ShowMenu=()=>{
        setMenuView(!menView)
        // console.log(MyRefMenu.current.classList.toggle('hidden'))
        // MyRefMenu.target.classList.toggle('hidden')
    }
    
    // control scroll for show navbar    
    const [lastYPost,setLastYPost]=useState(0)
    const [actionScroll, setActionScroll] = useState(true)
  
    useEffect(() => {
      const showNavbar=()=>{
        console.log(window.scrollY <lastYPost)
        console.log(window.scrollY,'pScroll Actual')
        console.log(lastYPost, 'lastYPst position anterio')
        setActionScroll(window.scrollY < lastYPost)
        console.log('scroll funtionc')
        setLastYPost(window.scrollY)
      }
  
      window.addEventListener('scroll',showNavbar,false)

      return ()=>{
        window.removeEventListener('scroll',showNavbar, false)
      }
    }, [lastYPost]);
  
   
  
    

    return (
        <>
            
            <nav  className="fixed z-10 top-0 left-0 w-full py-6" style={textColor}>
                
                <motion.div animate={{opacity: actionScroll?1:0}}  transition={{delay:0.2}} className="flex flex-rows mx-5 sm:mx-10">
                    <Link to="/">
                        <a className="flex"   target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <strong  className="text-xl font-bold"><span className='text-headline-2'>Gonzalo</span>Espinoza</strong>
                        </a>
                    </Link>
                    <button className="" type="button" data-toggle="" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button>

                    <div className="flex justify-end w-full" id="navbarSupportedContent">

                        <ul className="hidden md:flex gap-x-4">
                            <li className="">
                            <Link to='/'>
                                <a className="font-semibold hover:text-blue-500">Home
                                    {/* <span className="">(current)</span> */}
                                </a>
                            </Link>
                            </li>
                            <li className="">
                            <Link to='/nosotros'>
                                <a className="font-semibold hover:text-blue-500"> About
                                    {/* <span className="">(current)</span> */}
                                </a>
                            </Link>
                            </li>
                            <li className="">
                                <Link to="/skills">
                                    <a className="font-semibold hover:text-blue-500"  target="_blank">Skill</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link to='/portafolio'>
                                    <a className="font-semibold hover:text-blue-500" href="#servicios" target="_blank"> Portfolio  </a>
                                </Link>
                            </li>
                          
                                
                            <li className="">
                                <Link to="/contact">
                                    <a  className="font-semibold hover:text-blue-500" target="_blank">Contacto</a>
                                </Link>
                            </li>
                        </ul>

                        <ul onClick={ShowMenu} className="flex md:hidden">
                            <motion.svg whileHover={{scale:1.2}} whileTap={{scale:0.9}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                        </ul>

                    </div>

                </motion.div>
                {/* menu desplegble */}
                    <AnimatePresence>

                    <div  ref={MyRefMenu} className="bg-gray-400 fixed top-0 left-0 w-scree h-sreen">
                        <MenuDesplegable ShowMenu={ShowMenu} menView={menView} />
                    </div>
                    </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar;