import React from 'react'

import './Pagina-moderna.css'

export  const PaginaModerna =()=>{
    return(
        <div>
            
            <header>
                <div className="texto">
                    <h1 className="titulo"> Diseñador Web</h1>
                    <h3 className="subtitulo"> Desarrollo de sitios web </h3>
                    <b className="boton">Suscribete</b>
                </div>
                <div className="sesgoabajo"></div>
            </header>
            <main>
                <section className="acerca-de">
                    <div className="contenedor">
                        <h2 className="sobre-nosotros">Sobre nosotros</h2>
                        <h3 className="sloga">Tirando codigo en la web</h3>
                        <p className="parrofo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tempora odio repudiandae quis officiis mollitia pariatur commodi perferendis, est earum, numquam molestias sed dolores. Labore dolor ducimus corrupti omnis, maiores aliquam nemo velit ullam aspernatur perspiciatis temporibus totam atque nihil sequi saepe. Eum, ex magnam. Quasi laboriosam possimus alias sint expedita, perspiciatis illum non minima impedit deleniti tempora, accusantium nesciunt quo, dicta odio quisquam. Illo fugiat blanditiis assumenda doloremque nulla.</p>
                        <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in molestias ducimus reiciendis, perspiciatis labore laboriosam odit quod, earum dolor maxime voluptatem deleniti vitae facilis laudantium mollitia fuga voluptatibus vero. Nihil at veritatis ipsam doloremque corporis quos harum. Minus nihil aperiam molestiae alias quibusdam assumenda consectetur cumque numquam vel dolores officia repellendus excepturi quos voluptatum, deserunt, earum maiores iure quidem ratione cum exercitationem. Odio quidem a fugit beatae maxime libero.</p>
                         <a href="" className="boton">Suscribete</a>
                    </div>
                </section>
                <section className="galeria">
                    
                    <div className="sesgoarriba"></div>
                    
                    <div className="imagenes"><img src="ttp://mdbootstrap.com/img/Photos/Others/nature3.jpg" alt=""/></div>
                    <div className="imagenes"><img src="2.jpg" alt=""/></div>
                    <div className="imagenes"><img src="3.jpg" alt=""/></div>
                    <div className="imagenes">
                        <img src="" alt=""/>
                        <div className="encima">
                            <h2>Diseñador web</h2>
                            <div></div>
                        </div>
                    </div>
                    <div className="imagenes"><img src="http://mdbootstrap.com/img/Photos/Others/nature2.jpg" alt=""/></div>
                    
                </section>
                <section className="miembros">
                    <div className="contenedor">
                        <h1 className="sobre-nosotros">Nuestro equipo</h1>
                        <h3 className="slogan">Conoce nuestro equipo de trabajo</h3>
                        <div className="cards">
                            <div className="card">
                                <img src="http://mdbootstrap.com/img/Photos/Others/nature2.jpg" alt=""/>
                                <h4>web-designe</h4>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="card">
                                <img src="http://mdbootstrap.com/img/Photos/Others/nature3.jpg" alt=""/>
                                <h4>web-designe</h4>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="card">
                                <img src="http://mdbootstrap.com/img/Photos/Others/nature1.jpg" alt=""/>
                                <h4>web-designe</h4>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fondo">
                    <div className="sesgoarriba">
                    </div>

                        <h2 className="titulo-patrocinadores">Nuestros clientes</h2>
                        <h3 className="subtitulo-patronizadores">conose algunos patrosinadores</h3>
                        <div className="clientes">  
                            <div className="cliente"><img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt=""/></div>
                            <div className="cliente"><img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt=""/></div>
                            <div className="cliente"><img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt=""/></div>
                        </div>
                        <h3 className="subtitulo-patrosinadores especial">Muchas mas clientes</h3>
                    <div className="segoabajo-unico"></div>
                </section>
            </main>
            <footer>
                <div className="contenedor">
                    <h2 className="titulo-footer">Contactanos</h2>
                    <h3 className="subtitulo">Lo apresiamos mucho</h3>
                    <form action="">
                            <input type="text" name="" id="" placeholder=""nombre/>
                            <input type="email" name="" id=""plasholder="email" />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value=""/>
                    </form>
                </div>
            </footer>

        </div>
    )
} 