
import img_mi_sitio_web from './img/completas/miPortafolio.png'
import img_mi_sitio_web_min from './img/miniaturas/miPortafolio.png'

import img_web_cursos from './img/completas/cursos.png'

// movie
import img_web_movie from './img/movie/movie1.png'
import img_web_movie_player from './img/movie/movie-player.png'

// fanpelis
import img_fanpelis_min from './img/miniaturas/fanpelis_min.png';
import img_fanpelis from './img/completas/fanpelis.jpg'

// noticias bolivia
import img_noticias_bolivia from './img/completas/noticias-bolivia.png'
import img_noticias_bolivia_min from './img/miniaturas/noticias_bolivia_min.png'

// nuxtbo
import img_nuxtbo from './img/completas/nuxtbo.png';
import img_nuxtbo_min from './img/miniaturas/nuxtbo-min.png'

// nuxtbo demo
import img_nuxtboDemo from './img/completas/nuxboDemo.png'
import img_nuxtboDemo_min from './img/miniaturas/nuxtboDemo.png'





  const  portafolio = [
      {
         numero:'cero',
         type:'frontEnd',
         url: img_mi_sitio_web,
         url_min:img_mi_sitio_web_min,
         title:'Mi portafolio',
         description: 'Mi portafolio, realizado para mostrar información personal las distintas habilidades y conocimientos.',
         herramientas: 'ReactJS, Reac-router-dom, Framer Motion, HTML5, CSS, Tailwindcss, Firebase, Heroku',
         herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
         url_del_sitio:'https://gebuildv01.web.app',
         url_github_repositorio:"https://github.com/GonzaloEspinoza/mi-portafolio"
      },
    {
        numero:'uno',
        type:'frontEnd',
        url: img_nuxtboDemo,
        url_min:img_nuxtboDemo_min,
        title:'Tienda online, nuxtboDmo',
        description: 'NuxtboDemo es una tienda online de Nuxtbo, dicha tienda online contiene todos los productos y las dieferentes categorias, los clientes pueden comprar un producto, y el pedido le llega al dueño de la tienda',
        herramientas: 'Reactjs, HTML5, CSS3, Tailwindcss, react-route-dom, Framer motion, Amplify de AWS, S3 de AWS, Heroku, MongoDB Atlas',
        herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
        url_del_sitio:'https://master.d2modxhc98b9tp.amplifyapp.com/',
        url_github_repositorio:"https://github.com/Ecommerce-nodejs-react"
     },
     {
        numero:'dos',
        type:'frontEnd',
        url: img_web_cursos,
        url_min: img_web_cursos,
        title:'Sistema de gestion de aprendizaje',
        description: 'Sistema de gestion de aprendizaje basado en LMS, desarrollado para gestion de los cursos, examenes, material de apoyo, administracion de usuarios, y estudiantes (no fue implementado)',
        herramientas: 'ReactJS, HTML5, CSS, MDBootstrap, NodeJS, mongoDB, API-REST (Backend)',
        herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
        url_del_sitio: "#",
        url_github_repositorio:""
     },
     {
        numero:'tres',
        type:'frontEnd',
        url: img_web_movie,
        url_min: img_web_movie,
        title:'Trailers de peliculas',
        description: 'Esta página le permite buscar la información de las películas  de su interés y le permite ver el trailer de la misma. para el desarrollo de utilizaron dos RES APIs distintas como lo es OMDB y la api de Youtube.',
        herramientas: 'ReactJS, Bootstrap 4, CSS, HTML5, AnimeJS, REST-API, MongoDB, Firebase, Heroku, api de Youtube',
        herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
        url_del_sitio: "https://gebuildmovie.web.app/",
        url_github_repositorio:""
     }
     ,
     {
      numero:'cuatro',
      type:'frontEnd',
      url: img_noticias_bolivia,
      url_min: img_noticias_bolivia_min,
      title:'Noticias Bolivia 2020',
      description: 'Noticias Bolivia 2020 es una aplicación desarrollada en el lenguaje de Dart, con el framework de Flutter, que le permite ver a los usuarios las noticias mas recientes recolectadas de sitios web de noticias de Bolivia, extraidas mediante scraping.',
      herramientas: 'Lenguaje de programación Dart, framework Flutter,Google play Console for developers, web scraping, Nodejs, MongoDB, Docker, Docker-compose, Firebase, Heroku.',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.gonzalo.flutter_news_bolivia",
      url_github_repositorio:""
     },
     {
      numero:'cinco',
      type:'frontEnd',
      url: img_fanpelis,
      url_min: img_fanpelis_min,
      title:'FanPelis',
      description: 'FanPelis es una aplicación móvil desarrollada en el lenguaje de Dart que le permite al usuario ver una gran cantidad de películas de forma gratuita, tiene una interfaz agradable y amistosa.',
      herramientas: 'Lenguajes de programación  Dart, javascript.  Framework Flutter, Google play console for developers, Firebase, mongoDB, Nodejs (Api-rest), GraphQl, Heroku,  Docker, Docker-compose.',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.fanaticpelis.fanpelis",
      url_github_repositorio:""
     },
     {
      numero:'seis',
      type:'frontEnd',
      url: img_nuxtbo,
      url_min: img_nuxtbo_min,
      title:'nuxtbo',
      description: 'Nuxtbo es una landing page para la venta de tiendas online conectadas a Whatsapp',
      herramientas: 'Lenguajes de programación javascript. Libreria de Reactjs, mongoDB, Nodejs (Api-rest), Heroku,  Docker, Docker-compose, tailwindcss, framer motion, Route 53, Amplify',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://www.nuxtbo.digital/",
      url_github_repositorio:""
     }
  ]
     
    


export default {
    portafolio
}