import React, { Component } from 'react'
import './home.css'
import './img.css'

import $ from 'jquery'

import ShowModalDataPortafolio from './ShowDataProyecet'

// importar archivo de configuracion
import PORTAFOLIO from './data'


import img_equipo_desarrollo from './img/equipo-trabajo.png'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            arrayPOrtafolio:PORTAFOLIO,
            from:'Mi portafolio v0.1',
            name:'',
            email:'',
            phone:0,
            asunto:'',
            message:'',
            
            //constrol de estado de envio
            sendD:false
        }
        this.renderAlert=this.renderAlert.bind(this)
        
    }

    jqueryAction=()=>{
      $(document).ready(function() {
        $('a[href^="#"]').click(function() {
          var destino = $(this.hash);
          if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
          }
          if (destino.length == 0) {
            destino = $('html');
          }
          $('html, body').animate({ scrollTop: destino.offset().top }, 550);
          return false;
        });
      });
    }


    oncahnageMessage(e){
      e.preventDefault()

      this.setState({
        [e.target.name]:e.target.value
      })

      // console.log(this.state)
      
    }

    onChangeOption(e){
      e.preventDefault()

      console.log(e.target.name)
      console.log(e.target.options[e.target.selectedIndex].text)

      var valor=(e.target.options[e.target.selectedIndex].text)
      this.setState({
        asunto:valor
      })

      // console.log(this.state)

    }



    sendData(e){
      e.preventDefault()
      if(this.state.name !='' && this.state.email !='' && this.state.phone !='' && this.state.asunto != '' && this.state.message !=''){
        console.log('datos completos')

        const DataEmail={
          from:this.state.from,
          name:this.state.name,
          phone:this.state.phone,
          email: this.state.email,
          asunto:this.state.asunto,
          message:this.state.message

        }

        const objeto={
          method: 'POST',
          body:JSON.stringify(DataEmail),
          headers:{
            'Content-Type': 'application/json'
          }
        }

        const api_rest ='https://email-api-rest.herokuapp.com'

        const url_new_message = `${api_rest}/new/email`

        fetch(url_new_message,objeto)
          .then(respuest=>respuest.json())
          .then(data=>{
            // console.log(data.message)
            // console.log(data)
            
            if(data.success==='se guardo correctamente'){
              this.setState({
                sendD:'ok',
                  name:'',
                  email:'',
                  phone:0,
                  asunto:'',
                  message:''
              })
            }else{
              this.setState({
                sendD:'no send'
              })
            }
          })
          .catch(err=>{
            console.log(err)
            this.setState({
              sendD:'error de envio'
            })
          })


      }else{
        console.log('datos incompletos')
        this.setState({
          sendD:'complite'
        })
      }
    }


    renderAlert(){
   
      


      if(!this.state.sendD){
        
        return(
          <label className="p-3">Estado del mensaje</label>
        )
      }

      if(this.state.sendD==='complite'){
        setTimeout(()=>{
          this.setState({
            sendD:false
          })
         },5000)
        return(
          <div class="alert alert-danger" role="alert">
            Complete los campos *
          </div>
        )
      }

      if(this.state.sendD==='ok'){
        setTimeout(()=>{
          this.setState({
            sendD:false
          })
         },5000)
        return (
          <div class="alert alert-success" role="alert">
            Su mensaje fue envio
          </div>
        ) 
      }
      
      if(this.state.sendD==='no send'){
        setTimeout(()=>{
          this.setState({
            sendD:false
          })
         },5000)
        return(
          <div class="alert alert-warning" role="alert">
            Vuelva a intentarlo más tarde
          </div>
          
        )
      }
      if(this.state.sendD==='error de envio'){
        setTimeout(()=>{
          this.setState({
            sendD:false
          })
         },5000)
        return(
        <div class="alert alert-danger" role="alert">
            Error al enviar el mensaje
          </div>
        )
      }
      
    }


    resetDataState=(e)=>{
      e.preventDefault()
      this.setState({
            name:'',
            email:'',
            phone:0,
            asunto:'',
            message:'',
      })
    }

    render(){
      // console.log(this.state)
        return(
            <div>
              {this.jqueryAction()}
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div class="container">

      <a class="navbar-brand" href="#" target="_blank">
        <strong>GEbuild <a className="version-mypage">v0.0.1</a></strong>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#nosotros">Nosotros
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios" target="_blank">Metodología </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portafolio" target="_blank">Portaflio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto" target="_blank">Contacto</a>
          </li>
        </ul>

        <ul class="navbar-nav nav-flex-icons">
          {/* <li class="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" class="nav-link" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li> */}

          {/* <li class="nav-item">
            <a href="https://twitter.com/MDBootstrap" class="nav-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li> */}

          {/* <li class="nav-item">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link border border-light rounded"
              target="_blank">
              <i class="fab fa-github mr-2"></i>MDB GitHub
            </a>
          </li> */}
        </ul>

      </div>

    </div>
  </nav>

  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      {/* <li data-target="#carousel-example-1z" data-slide-to="2"></li> */}
    </ol>

    <div class="  carousel-inner" role="listbox">

      <div class=" carousel-item active">
        <div class="img-header view">

          {/* <img width="100%" height='100%' src="https://mdbootstrap.com/img/Photos/Others/images/91.jpg" >
             
          </img>
           */}

          <div class=" mask rgba-black-light d-flex justify-content-center align-items-center">

            <div class=" text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong className="title-page ">DESARROLLADOR WEB</strong>
              </h1>

              <p className="subtitulo wow fadeInUp">
                <strong>Diseñamos y desarrollamos sitios web</strong>
              <br/>
                <strong>Le damos vida a esa idea que ronda por tu mente</strong>
              </p>
{/* 
              <p class="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p> */}
                                      {/* https://wa.me/numerodetelefonodewhatsapp/?text=urlencodedtext */}
              <a target="_blank" href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza" class="solicitar-info btn btn-outline-white btn-lg">Solicita informacion
              <i class="fab fa-whatsapp pl-2"></i>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div class="carousel-item">
        <div class="img-header2 view">

          {/* <video class="video-intro" controls autoplay loop muted>
              <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4"/>
          </video> */}

          {/* <img  height="100%" width="100%" src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt=""/> */}

          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">

            <div class="text-center white-text mx-5 wow fadeIn">
            <h1 class="mb-4">
                {/* <strong className="title-page">DESARROLLADOR WEB</strong><br/> */}
                <strong className="title-page">CONVIRTIENDO IDEAS</strong>
              </h1>

              <p className="subtitulo">
                <strong>Diseñamos y desarrollamos sitios web</strong>
              <br/>
                <strong>Le damos vida a esa idea que ronda por tu mente</strong>
              </p>

              <a target="_blank" href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza" class="solicitar-info btn btn-outline-white btn-lg">Solicita informacion
              <i class="fab fa-whatsapp pl-2"></i>
              </a>
            </div>

          </div>

        </div>
      </div>

      
          

        
    

    </div>

    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

  </div>


  <main>
    <div class=" m-lg-5 p-3" id="nosotros"> 

      <section class=" wow fadeIn ml-lg-5 mr-lg-5 ml-sm-5 mr-sm-5">

        <div class="row contenedor-nosotros">

          {/* <div class="col-md-6 mb-4"> 

            <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" class="img-fluid z-depth-1-half" alt=""></img>

          </div> */}

          <div class="col-md-12 mb-4 pl-4 pr-4">
            <br/>
            <h3 class="h3-responsive mb-3 text-center p-5 font-weight-bold">SOBRE NOSOTROS</h3>
        
            <p className="text-content-nosotros  h1-responsive ">
              ¡Hola a todos!, soy Gonzalo y soy desarrollador freelance me dedico al diseño y desarrollo de páginas web, gracias a mi experiencia puedo crear páginas web eficientes y optimizadas para obtener los mejores resultados, adaptadas a las necesidades de tu empresa, producto o servicio.
            </p>

            <br/>
            <p className="text-content-nosotros  h1-responsive">
              <strong className="pt-5">Conocimientos:</strong><br/>  
              <br/>             
              <strong className="text-primary">Frontend:
              </strong>  Conocimientos en <strong> HTML5</strong>, <strong>CSS</strong> y <strong>SASS</strong> junto a los lenguajes de programación como <strong>Javascript</strong>,  conocimientos en las librerías y framework como <strong>ReactJs</strong>, <strong>VueJS</strong>, <strong>Jquery</strong>, <strong>MDBootstrap</strong>.
              
            </p>

            <p className="text-content-nosotros  h1-responsive">
              <strong className="text-primary">Backend: </strong>
              Conocimientos en la utilización de <strong>NodeJS</strong>, <strong>Express</strong>, <strong>Mongoose</strong>, <strong>GraphQL</strong>; lenguajes de programación <strong>Javascript</strong>.
            </p>

            <p className="text-content-nosotros  h1-responsive" >
            <strong className="text-primary">Diseño: </strong>
            <strong>Figma</strong>, <strong>Photoshop</strong>, <strong>DaVinci Resolve</strong>.
            </p>

            <p className="text-content-nosotros  h1-responsive" >
              <strong className="text-primary">Otros: </strong>
              <strong>Docker</strong>, <strong>Docker-compose</strong>, <strong>Git</strong>, <strong>Visual Studio Code</strong>.
            </p>

            <br/>
            <hr></hr>

            {/* <p>
              <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
            </p> */}


          </div>

        </div>
            
      </section>
            



            {/* --SERVICIOS--- */}
      <section className="container-secction-metodotrabajo pt-5 pb-5 ml-5 mr-5 fondo" id="servicios">
        <br/>
      <h3 class="h3-responsive text-center mb-5 pb-5 font-weight-bold" >NUESTRO MÉTODO DE TRABAJO</h3>

      <div class=" row wow fadeIn">

          <div class="col-lg-12 col-md-12">

        <div className="row">

           {/* Grid column */}
        <div className="col-lg-5">
          {/* Featured image */}
          <div className=" overlay rounded  mb-lg-0 mb-4">
            <img className="img-fluid" src={img_equipo_desarrollo} alt="Sample image" />
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

          <a  className="green-text">
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


        <br/>
      <section id="portafolio">
        <h2 class="my-5 h2 text-center">MI PORTAFOLIO</h2>

        <div class="row features-small mt-5 p-5 wow fadeIn img_center">


          {
            this.state.arrayPOrtafolio.portafolio.map((d,i)=>{

              // console.log(d.numero)
              // console.log(`#modal${d.numero}`)
              return(

                
                <div class="col-xl-3 col-lg-4 col-sm pb-4 img_center">
                <ShowModalDataPortafolio
                  numero={d.numero}
                  objectProtect={d}
                />

                  <div class="row img_center">
                  {/* {this.modalshow(d)} */}
                <div class="ih-item circle effect6 scale_up example z-depth-4 img_center ">
                  <a data-toggle="modal"  data-target={`#modal${d.numero}`} >
                      <div class="img">
                      <img className="img-src" src={d.url} alt="img" />
                      </div>
                    <div class="info">
                      <h3>{d.title}</h3>
                      <p>Haz clic para ver más</p>
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
  <br/>
  <br/>
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
              <i class="fas fa-mobile-alt pr-2 text-white "  > Celular o whatsapp: <br/></i > <br/>
                  +591 69651053  <a href="https://wa.me/59169651053?text=Requiero%20más%20información%20del%20trabajo%20que%20realiza"><i class="fab fa-whatsapp text-success"></i></a>
              </p>

              <p className="font-weight-bolder  text-primary">
              <i class="far fa-envelope text-white"> Nuestro correo electronico: <br/></i > <br/>
                  gebuild20@gmail.com
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
        <form className="text-center border border-light p-2 col-md-12 col-lg-9 mt-md-0 mt-3 formulario-contacto">
        {/* Name */}
        <input type="text" id="defaultContactFormName" name="name" value={this.state.name} onChange={this.oncahnageMessage.bind(this)} className="form-control mb-2" placeholder="Nombre y Apellido ..*" />
        {/* Email */}
        <input type="email" id="defaultContactFormEmail" name='email' value={this.state.email} onChange={this.oncahnageMessage.bind(this)} className="form-control mb-2" placeholder="Tu correo electronico ..*" />
        {/* N° de cellular */}
        <input type="Number" id="defaultContactFormCelular" name='phone' value={this.state.phone} onChange={this.oncahnageMessage.bind(this)} className="form-control mb-2" placeholder="Telefono o celular ..*" />
        {/* asunto */}
        <label>Asunto</label>
        <select className="browser-default custom-select  mb-2" name='asunto'  onChange={this.onChangeOption.bind(this)} >
          <option value disabled selected>Seleccione una opción ..*</option>
          <option value={1} >Recomendación</option>
          <option value={2}>Reportar error</option>
          <option value={3}>Diseño de pagina web</option>
          <option value={4}>Desarrollo de API-REST</option>
          <option value={5}>Diseño y desarrollo de sitios web</option>
          <option value={6}>Otros</option>
        </select>
        {/* Message */}
    
        <div className="form-group">
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" value={this.state.message} name="message" onChange={this.oncahnageMessage.bind(this)} rows={3} placeholder="Mensaje ..*" defaultValue={""} />
        </div>
        {/* Copy */}
        {this.renderAlert()}

        {/* <div className="custom-control custom-checkbox mb-0">
          <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
        </div> */}
        {/* Send button */}
        <div className=" col-md-12 col-lg-12 buttons pb-2">
          <button className="btn btn-info btn-block button-send" onClick={this.sendData.bind(this)} >Enviar</button>
        </div>
        <div className=" col-md-12 col-lg-12 pb-2 buttons">
          <button className="btn btn-info btn-block button-send" onClick={this.resetDataState}>restablecer</button>
        </div>
      </form>
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
  

            </div>
        )
    }
}