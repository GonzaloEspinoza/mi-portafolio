import React from 'react';

const Incio = () => {

    return (
        <>
   

<CounterVisits />




<main>

  <div class=" m-lg-5 p-3 wow fadeInUp" id="nosotros">

    {/* <section class=" wow fadeIn ml-lg-5 mr-lg-5 ml-sm-5 mr-sm-5" ref={ section => this.nost = section }></section> */}

    <section class=" wow fadeIn ml-lg-5 mr-lg-5 ml-sm-5 mr-sm-5" >
    </section>


    {/* --SERVICIOS--- */}
    <section className="container-secction-metodotrabajo pt-5 pb-5 ml-5 mr-5 fondo" id="servicios">
      <br />
      <h3 class="h3-responsive text-center mb-5 pb-5 font-weight-bold" >NUESTRO MÉTODO DE TRABAJO</h3>

      <div class=" row wow fadeIn">

        <div class="col-lg-12 col-md-12">

          <div className="row">

            {/* Grid column */}
            <div className="col-lg-5">
              {/* Featured image */}
              <div className=" overlay rounded  mb-lg-0 mb-4">
                <img className="img-fluid" src={svg_group_team} alt="Sample image" />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-7">
              {/* Category */}
              <div className="content-metodologia-tabajo col-lg-9 col-md-6 col-sm-9 text-left">

                <a className="black-text">
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-diagnoses text-warning pr-2"></i> Planificación. </h4>
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-project-diagram text-warning pr-2"></i> Diseño y usabilidad. </h4>
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-laptop-code text-warning pr-2"></i> Codificación, desarrollo de la web. </h4>
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-undo-alt text-warning pr-2"></i> Pruebas y control de calidad. </h4>
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-cube text-warning pr-2"></i> Entrega de la web. </h4>
                  <h4 className="font-weight-bold mb-4 h4-responsive"><i class="fas fa-tv text-warning pr-2"></i>Capacitación. </h4>
                </a>
              </div>
              {/* Post title */}
            </div>
            {/* Grid column */}
          </div>


        </div>
      </div>

    </section>



    {/* ---Mi Portafolio--- */}

    <hr class="my-5" id="portafolio"></hr>


    <br />
    <section id="portafolio">
      <h2 class="my-5 h2 text-center">MI PORTAFOLIO</h2>

      <div class="row features-small mt-5 p-5 wow fadeIn img_center">


        {
          PORTAFOLIO.portafolio.map((d, i) => {

            // console.log(d.numero)
            // console.log(`#modal${d.numero}`)
            return (


              <div class="col-xl-3 col-lg-4 col-sm pb-4 img_center">
                <ShowModalDataPortafolio
                  numero={d.numero}
                  objectProtect={d}
                />

                <div class="row img_center">
                  {/* {this.modalshow(d)} */}
                  <div class="ih-item circle effect6 scale_up example z-depth-4 img_center ">
                    <a data-toggle="modal" data-target={`#modal${d.numero}`} >
                      <div class="img">
                        <img className="img-src" src={d.url_min} alt="img" />
                      </div>

                      <div class="info" style={{ backgroundImage: `url(${d.url_min})`, backgroundSize: "cover" }}>
                        <div className="mascara">
                          <h3>{d.title}</h3>
                          <p className="mt-5">Haz clic para ver más</p>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            )
          })
        }


      </div>

    </section>

  </div>
</main>

<footer class="page-footer text-center font-small mt-4 wow    fadeIn footer-style" id="contacto">
  <br />
  <br />
  <p className="h4 mb-4 pt-4 pb-4">CONTACTO</p>

  <div className="container-fluid text-center text-md-left pl-5 pr-5 container-formulario">
    {/* Grid row */}
    <div className="row">
      {/* Grid column */}
      <div className="col-md-6 mt-md-0 mt-3">
        {/* Content */}
        <h5 className="texto-inf-contacto text-uppercase text-left pt-5 pb-4 font-weight-bold">Información de contacto</h5>

        <div className="info-contac pl-5 pr-5">
          {/* <h5 className="h5-responsive text-uppercase">informacion de contacto</h5> */}
          <p className="font-weight-bolder">Si tienes alguna duda llamame al:</p>

          <p className="font-weight-bolder text-primary">
            <i class="fas fa-mobile-alt pr-2 text-white "  > Celular o whatsapp: <br /></i > <br />
            +591 69651053  <a href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza"><i class="fab fa-whatsapp text-success"></i></a>
          </p>

          <p className="font-weight-bolder  text-primary">
            <i class="far fa-envelope text-white"> Nuestro correo electronico: <br /></i > <br />
            gonis1990@gmail.com
          </p>

        </div>


      </div>
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none pb-3" />
      {/* Grid column */}
      <div className="col-md-6 mb-md-0 mb-3 pr-5 pl-5 pr-5 container-formulario">
        {/* Content */}
        <h6 className="text-uppercase text-center pb-2 font-weight-light">Escribeme ahora, estoy para ayudarte</h6>



        {/* Default form contact */}


        {/* Default form contact */}

      </div>
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>

  <hr class="my-4"></hr>

  <div class="pb-4">
    <a href="https://www.facebook.com/rootgonzalo/" target="_blank">
      <i class="fab fa-facebook-f mr-3"></i>
    </a>

    <a href="https://twitter.com/Neilgonzalosp12" target="_blank">
      <i class="fab fa-twitter mr-3"></i>
    </a>

    <a href="https://www.youtube.com/channel/UCeLQMKaL3FpKxr1Wca79P5w?view_as=subscriber" target="_blank">
      <i class="fab fa-youtube mr-3"></i>
    </a>

    <a href="https://github.com/GonzaloEspinoza" target="_blank">
      <i class="fab fa-github mr-3"></i>
    </a>

    {/* <a href="http://codepen.io/mdbootstrap/" target="_blank">
  <i class="fab fa-codepen mr-3"></i>
</a> */}
  </div>

  <div class="footer-copyright py-4 pb-0 style-copyright">
    Todos los derechos reservados © Gonzalo E. 2020
  </div>

</footer>




        </>
    )
}

export default Incio;