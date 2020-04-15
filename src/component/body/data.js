
import img_mi_sitio_web from './img/completas/gebuildv01.png'
import img_mi_sitio_web_min from './img/miniaturas/gebuildv01.png'

import img_web_cursos from './img/completas/cursos.png'





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
     }
  ]
     
    


export default {
    portafolio
}