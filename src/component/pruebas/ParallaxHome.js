import React  from 'react'

import './ParallaxHome.css'

export const  ParallaxHome =()=>{
    return(

    <div className="">

        <header className="parallax-completo">

            <div className="text-hire ">
                
                <h1>
                    Diseñador de Desarrollador
                </h1>
            </div>
        </header>

        <section className="text-content">
            <h2>Parallax </h2>
            <p>Parallax scrolling is a web site trend where the background content (i.e. an image) is moved at a different speed than the foreground content while scrolling. Click on the links below to see the difference between a website with and without parallax scrolling.
            Use a container element and add a background image to the container with a specific height. Then use the background-attachment: fixed to create the actual parallax effect. The other background properties are used to center and scale the image perfectly:

            </p>
        </section>

        <section className="parallax-2do">
            <h1>Notros</h1>
        </section>

    </div>
    )
}

