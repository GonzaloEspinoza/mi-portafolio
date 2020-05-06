
import img_mi_sitio_web from './img/completas/gebuildv01.png'
import img_mi_sitio_web_min from './img/miniaturas/gebuildv01.png'

import img_web_cursos from './img/completas/cursos.png'

// movie
import img_web_movie from './img/movie/movie1.png'
import img_web_movie_player from './img/movie/movie-player.png'





  const  portafolio = [
    {
        numero:'uno',
        url: img_mi_sitio_web,
        url_min:img_mi_sitio_web_min,
        title:'Mi Sitio Web',
        description: 'Mi portafolio, realizado para mostrar información personal y de mis habilidades y conocimientos.',
        herramientas: 'ReactJS, HTML5, CSS, MDBootstrap.',
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
        herramientas: 'ReactJS, Bootstrap 4, CSS, HTML5, AnimeJS, REST API, MongoDB, Firebase',
        url_del_sitio: "https://gebuildmovie.web.app/"
     }
  ]
     
    


export default {
    portafolio
}