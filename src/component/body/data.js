
import img_mi_sitio_web from './img/completas/gebuildv01.png'
import img_mi_sitio_web_min from './img/miniaturas/gebuildv01.png'

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





  const  portafolio = [
    {
        numero:'uno',
        url: img_mi_sitio_web,
        url_min:img_mi_sitio_web_min,
        title:'Mi Sitio Web',
        description: 'Mi portafolio, realizado para mostrar información personal y de mis habilidades y conocimientos.',
        herramientas: 'ReactJS, HTML5, CSS, MDBootstrap, Firebase, Heroku',
        url_del_sitio:'https://gebuildv01.web.app'
     },
     {
        numero:'dos',
        url: img_web_cursos,
        url_min: img_web_cursos,
        title:'Sistema de gestion de aprendizaje',
        description: 'Sistema de gestion de aprendizaje basado en LMS, desarrollado para gestion de los cursos, examenes, material de apoyo, administracion de usuarios, y estudiantes (no fue implementado)',
        herramientas: 'ReactJS, HTML5, CSS, MDBootstrap, NodeJS, mongoDB, API-REST (Backend)',
        url_del_sitio: "#"
     },
     {
        numero:'tres',
        url: img_web_movie,
        url_min: img_web_movie,
        title:'Trailers de peliculas',
        description: 'Esta página le permite buscar la información de las películas  de su interés y le permite ver el trailer de la misma. para el desarrollo de utilizaron dos RES APIs distintas como lo es OMDB y la api de Youtube.',
        herramientas: 'ReactJS, Bootstrap 4, CSS, HTML5, AnimeJS, REST-API, MongoDB, Firebase, Heroku, api de Youtube',
        url_del_sitio: "https://gebuildmovie.web.app/"
     }
     ,
     {
      numero:'cuatro',
      url: img_noticias_bolivia,
      url_min: img_noticias_bolivia_min,
      title:'Noticias Bolivia 2020',
      description: 'Noticias Bolivia 2020 es una aplicación desarrollada en el lenguaje de Dart, con el framework de Flutter, que le permite ver a los usuarios las noticias mas recientes recolectadas de sitios web de noticias de Bolivia, extraidas mediante scraping.',
      herramientas: 'Lenguaje de programación Dart, framework Flutter,Google play Console for developers, web scraping, Nodejs, MongoDB, Docker, Docker-compose, Firebase, Heroku.',
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.gonzalo.flutter_news_bolivia"
     },
     {
      numero:'cinco',
      url: img_fanpelis,
      url_min: img_fanpelis_min,
      title:'FanPelis',
      description: 'FanPelis es una aplicación móvil desarrollada en el lenguaje de Dart que le permite al usuario ver una gran cantidad de películas de forma gratuita, tiene una interfaz agradable y amistosa.',
      herramientas: 'Lenguajes de programación  Dart, javascript.  Framework Flutter, Google play console for developers, Firebase, mongoDB, Nodejs (Api-rest), GraphQl, Heroku,  Docker, Docker-compose.',
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.fanaticpelis.fanpelis"
     }
  ]
     
    


export default {
    portafolio
}