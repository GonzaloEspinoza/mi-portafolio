import React, { useState, useEffect } from 'react';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import'./skills.css';
import svgFronetn from '../../../assets/svg/frontend.svg'
import  DataSkill from  './dataSkills/dataSkills'

const Skils = ({ location }) => {

    const {ref, inView, entry} = useInView();
    const {ref2,inView2,entry2} = useInView()
    useEffect(() => {
     if(location.pathname ==='/skills'){
        window.scrollTo(0,0)
     }
    }, [location]);


    return (
        <>
            <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="content-skill   flex justify-center py-32">
                <div  className="bg-green-10 mx-2 sm:mx-10 md:mx-16 lg:mx-20  mt-20 my-10 w-full">
                    <p className="text-lg text-left">
                        <strong className="pt-5">My Skills:</strong><br/>
                        <br />
                        <strong className="text-primary">Frontend:
                        </strong> CI/CD in  <strong> AWS Amplify</strong>,  <strong>EC2</strong> and <strong>Firebase</strong>
                    </p>

                    <p className="text-lg text-left">
                        <strong className="text-primary">Backend: </strong>
                        Deploying an Node.js (Api-Rest) app on <strong>Heroku</strong>, deploying Database in <strong>MongoDB Atlas and AWS</strong>.
                    </p>

                    <p className="text-lg text-left" >
                        <strong className="text-primary">Others: </strong>
                        <strong>Docker</strong>, <strong>Docker-compose</strong>, <strong>Git</strong>, <strong>Github</strong>, <strong>Visual Studio Code</strong>.
    
                    </p>
                <div>
                    
                <div className="bg-gray-200 mt-14">
                        <h2 className="text-lg font-semibold">Front end developer</h2>
                       <div  className="bg-gray-100 grid grid-cols-2 md:flex justify-center w-full">
                            <div id="content-fontend" className="bg-indigo-60 w-full">
                                <ul className="font-semibold bg-gray-50">
                                    <li>Javascript</li>
                                    <li>Reactjs</li>
                                    <li>Redux</li>
                                    <li>Html5</li>
                                    <li>Css3</li>
                                    <li>bootstrap</li>
                                    <li>Tailwind</li>
                                    <li>Framer motion</li>
                                    <li>Firebase</li>
                                    <li>AWS <span>(Amplify)</span></li>
                                    <li>AWS <span>(EC2)</span></li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 w-full grid grid-flow-col grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2  justify-center items-center gap-1 sm:gap-3">
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/redux.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v2.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/css3.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/50/000000/firebase.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/amazon-web-services.png"/>
                            </div>
                       </div>
                    </div>
                    <div  ref={ref} className="bg-gray-200 pt-14">
                        <h2 className="text-largo font-semibold">Back end developer</h2>  
                    {
                     inView &&
                       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="bg-gray-30 flex justify-center w-full">
                            <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1}} className="bg-indigo-60 w-full">
                                <ul className="font-semibold bg-gray-50">
                                    <li>Javascript</li>
                                    <li>Nodejs</li>
                                    <li>PostgreSQL</li>
                                    <li>Docker</li>
                                    <li>MongoDB</li>
                                    <li>Heroku</li>
                                    
                                </ul>
                            </motion.div>
                            <motion.div initial={{x:100}} animate={{x:0}} transition={{duration:1}} className="bg-gray-100 w-full grid grid-flow-col grid-cols-3 grid-rows-2  justify-center items-center gap-3">
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/fluency/48/000000/docker.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/heroku.png"/>
                            </motion.div>
                       </motion.div>
                    }
                    </div>
                    {
                    inView &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:1, delay:0.6}}  className="bg-gray-200 pt-14">
                        <h2 className="text-lg font-semibold">Mobile app developer</h2>
                       <div className="bg-gray-30 flex justify-center w-full">
                            <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1.2, delay:1}} className="bg-indigo-60 w-full">
                                <ul className="font-semibold bg-gray-50 h-full">
                                    <li>Dart</li>
                                    <li>Flutter</li>
                                    <li>PlayStore</li>
                                    <li>Firebase(push Notification)</li>
                                </ul>
                            
                            </motion.div>
                            <motion.div initial={{x:100}} animate={{x:0}} transition={{duration:1.2, delay:1}} className="bg-gray-100 w-full grid grid-flow-col grid-cols-1 grid-rows-2  justify-center items-center gap-3">
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/dart.png"/>
                                <img className="mx-auto" src="https://img.icons8.com/color/48/000000/flutter.png"/>
                            </motion.div>
                       </div>
                    </motion.div>
                    }
                </div>

                </div>
            </motion.section>
        </>
    )
}

export default Skils;