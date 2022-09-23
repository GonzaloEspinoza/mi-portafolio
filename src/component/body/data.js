
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

// nuxtbo de lanfin page
import img_landing_page from './img/completas/sistema_punto_ventas.png'
import img_landing_page_min from './img/miniaturas/sistema_punto_ventas.png';

import trailer_arquitecture  from '../body/img/assets/frontend_resources/movie_trailers/architecture.png';
import trailer_diagram  from '../body/img/assets/frontend_resources/movie_trailers/diagram.png';

import nuxtbo_architecture from '../body/img/assets/frontend_resources/nuxtbo_demo/architecture.png'
import nuxtbo_diagram from '../body/img/assets/frontend_resources/nuxtbo_demo/diagram.png';

import landing_srchitecture from '../body/img/assets/frontend_resources/landing_nuxtbo/architecture.png';
import landing_diagram from '../body/img/assets/frontend_resources/landing_nuxtbo/diagram.png';


import siste_punto_ventas_architecture from '../body/img/assets/frontend_resources/sis-punto-ventas/architecture.png';
import siste_punto_ventas_diagram from '../body/img/assets/frontend_resources/sis-punto-ventas/diagram.png';

import portafolio_diagram from '../body/img/assets/frontend_resources/portafolio-ge/diagram.png';

// screeshots
import screenshots_sis_ventas_products from '../body/img/screenshots/sis_punto_ventas/products.PNG';
import screenshots_sis_ventas_client from '../body/img/screenshots/sis_punto_ventas/clientes.PNG';
import screenshots_sis_ventas_reportes from '../body/img/screenshots/sis_punto_ventas/reportes.PNG';
import screenshots_sis_ventas_resportes2 from '../body/img/screenshots/sis_punto_ventas/reportes2.PNG';
import screenshots_sis_ventas_users from '../body/img/screenshots/sis_punto_ventas/users.PNG';

// screenshots store online nuxtbo demo
import screenshot_tienda_online_product_selected from '../body/img/screenshots/tienda_online_nuxtbo/products_selected.PNG';
import screenshot_tienda_online_product_card_products from '../body/img/screenshots/tienda_online_nuxtbo/card_products.PNG';
import screenshot_tienda_online_product_envio_pedido from '../body/img/screenshots/tienda_online_nuxtbo/envio_pedido.PNG';
import screenshot_tienda_online_product_pedido from '../body/img/screenshots/tienda_online_nuxtbo/login.PNG';
import screenshot_tienda_online_product_tienda from '../body/img/screenshots/tienda_online_nuxtbo/tienda.PNG';
import screenshot_tienda_online_product_productos from '../body/img/screenshots/tienda_online_nuxtbo/productos.PNG';
import screenshot_tienda_online_product_pedidos from '../body/img/screenshots/tienda_online_nuxtbo/pedidos.PNG';


  const  portafolio = [

      {
         numero:'0',
         type:'frontEnd',
         url: img_mi_sitio_web,
         url_min:img_mi_sitio_web_min,
         title:'Mi portafolio',
         description: 'Mi portafolio, realizado para mostrar información personal las distintas habilidades y conocimientos.',
         herramientas: 'ReactJS, Reac-router-dom, Framer Motion, HTML5, CSS, Tailwindcss, Firebase, Heroku',
         herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
         url_del_sitio:'https://gebuildv01.web.app',
         url_github_repositorio:"https://github.com/GonzaloEspinoza/mi-portafolio",
         screenshots:[],
         simpleDiagram:{
            title:'Simple site diagram',
            url_image:[
               portafolio_diagram
            ]
           },
           architecture:{
            title:'Architecture',
            url_images:[
               
            ]
           },
           credenciales_acceso:{
            user:'',
            password:''
         }
      },
      {
         numero:'1',
         type:'frontEnd',
         url: img_landing_page,
         url_min:img_landing_page_min,
         title:'Sistema punto de ventas y emisión de tickets',
         description: 'Sistema punto de ventas y emisión de tickets, es un sistema que permite manejar todo el inventario de productos de un negocio, registros de productos, actualizacion, elininacion, venta de productos, enmicion de ticket, reporte de ventas, reporte gastos, reporte de ventas del dia, cierre de caja y descarga de los reportes en excel ',
         herramientas: 'ReactJs, Reac-router-dom, Framer Motion, HTML5, CSS3, Bucket AWS, ElectronJs',
         herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
         url_del_sitio:'http://bucket-food-proyect.s3-website-us-east-1.amazonaws.com/',
         url_github_repositorio:"https://github.com/sistema-punto-de-ventas/reactjs-electronjs-punto-de-ventas",
         screenshots:[
            screenshots_sis_ventas_products,
            screenshots_sis_ventas_client,
            screenshots_sis_ventas_reportes,
            screenshots_sis_ventas_resportes2,
            screenshots_sis_ventas_users
         ],
         simpleDiagram:{
            title:'Simple site diagram',
            url_image:[
               siste_punto_ventas_diagram
            ]
         },
         architecture:{
            title:'Architecture',
            url_images:[
               siste_punto_ventas_architecture
            ]
         },
         credenciales_acceso:{
            user:'gonzalo@gmail.com',
            password:'admin'
         }
      },
    {
        numero:'3',
        type:'frontEnd',
        url: img_nuxtboDemo,
        url_min:img_nuxtboDemo_min,
        title:'Tienda online, nuxtboDemo',
        description: 'NuxtboDemo es una tienda online de Nuxtbo, dicha tienda online contiene todos los productos que un dueño de negocio pueda ofrecer, clasificados de acuerdo a las dieferentes categorias, los clientes pueden comprar un producto en la tienda online, y el pedido le llega al dueño del negocio directamente al Whatsapp que estara enlazado a la tienda en linea',
        herramientas: 'Reactjs, HTML5, CSS3, Tailwindcss, react-route-dom, Framer motion, Amplify de AWS, S3 de AWS, Heroku, MongoDB Atlas',
        herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
        url_del_sitio:'https://nuxtbo.netlify.app/',
        url_github_repositorio:"https://github.com/Ecommerce-nodejs-react",
        screenshots:[
         screenshot_tienda_online_product_selected,
         screenshot_tienda_online_product_card_products,
         screenshot_tienda_online_product_envio_pedido,
         screenshot_tienda_online_product_pedido,
         screenshot_tienda_online_product_tienda,
         screenshot_tienda_online_product_productos,
         screenshot_tienda_online_product_pedidos,
        ],
        simpleDiagram:{
         title:'Simple site diagram',
         url_image:[
            nuxtbo_diagram
         ]
        },
        architecture:{
         title:'Architecture',
         url_images:[
            nuxtbo_architecture
         ]
        },
        credenciales_acceso:{
         user:'pavel@gmail.com',
         password:'admin'
      }
        
     },
      {
         numero:'2',
         type:'frontEnd',
         url: img_web_movie,
         url_min: img_web_movie,
         title:'Trailers de peliculas',
         description: 'Esta página le permite buscar la información de las películas  de su interés y le permite ver el trailer de la misma. para el desarrollo de utilizaron dos RES APIs distintas como lo es OMDB y la api de Youtube.',
         herramientas: 'ReactJS, Bootstrap 4, CSS, HTML5, AnimeJS, REST-API, MongoDB, Firebase, Heroku, api de Youtube',
         herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
         url_del_sitio: "https://gebuildmovie.web.app/",
         url_github_repositorio:"",
         screenshots:[],
         simpleDiagram:{
            title:'Simple site diagram',
            url_image:[
               trailer_diagram
            ]
           },
           architecture:{
            title:'Architecture',
            url_images:[
               trailer_arquitecture
            ]
           },
           credenciales_acceso:{
            user:'',
            password:''
         }
      },
     {
      numero:'4',
      type:'frontEnd',
      url: img_nuxtbo,
      url_min: img_nuxtbo_min,
      title:'Nuxtbo landing page',
      description: 'Nuxtbo es una landing page para la venta de tiendas online conectadas a Whatsapp',
      herramientas: 'Lenguajes de programación javascript. Libreria de Reactjs, mongoDB, Nodejs (Api-rest), Heroku,  Docker, Docker-compose, tailwindcss, framer motion, Route 53, Amplify',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://nuxtbo-landingpage.netlify.app/#/",
      url_github_repositorio:"https://github.com/Ecommerce-nodejs-react/landingPageNuxtBo",
      screenshots:[],
      simpleDiagram:{
         title:'Simple site diagram',
         url_image:[
            landing_diagram
         ]
        },
        architecture:{
         title:'Architecture',
         url_images:[
            landing_srchitecture
         ]
        },
        credenciales_acceso:{
         user:'',
         password:''
      }
     },
     {
        numero:'4',
        type:'frontEnd',
        url: img_web_cursos,
        url_min: img_web_cursos,
        title:'Sistema de gestion de aprendizaje',
        description: 'Sistema de gestion de aprendizaje basado en LMS, desarrollado para gestion de los cursos, examenes, material de apoyo, administracion de usuarios, y estudiantes (no fue implementado)',
        herramientas: 'ReactJS, HTML5, CSS, MDBootstrap, NodeJS, mongoDB, API-REST (Backend)',
        herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
        url_del_sitio: "#",
        url_github_repositorio:"",
        screenshots:[],
        simpleDiagram:{
         title:'Simple site diagram',
         url_image:[
           
         ]
        },
        architecture:{
         title:'Architecture',
         url_images:[
           
         ]
        },
        credenciales_acceso:{
         user:'',
         password:''
      }
     }
 
     ,
     {
      numero:'5',
      type:'frontEnd',
      url: img_noticias_bolivia,
      url_min: img_noticias_bolivia_min,
      title:'Noticias Bolivia 2020',
      description: 'Noticias Bolivia 2020 es una aplicación desarrollada en el lenguaje de Dart, con el framework de Flutter, que le permite ver a los usuarios las noticias mas recientes recolectadas de sitios web de noticias de Bolivia, extraidas mediante scraping.',
      herramientas: 'Lenguaje de programación Dart, framework Flutter,Google play Console for developers, web scraping, Nodejs, MongoDB, Docker, Docker-compose, Firebase, Heroku.',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.gonzalo.flutter_news_bolivia",
      url_github_repositorio:"",
      screenshots:[],
      simpleDiagram:{
         title:'Simple site diagram',
         url_image:[
            
         ]
        },
        architecture:{
         title:'Architecture',
         url_images:[
            
         ]
        },
        credenciales_acceso:{
         user:'',
         password:''
      }
     },
     {
      numero:'6',
      type:'frontEnd',
      url: img_fanpelis,
      url_min: img_fanpelis_min,
      title:'FanPelis',
      description: 'FanPelis es una aplicación móvil desarrollada en el lenguaje de Dart que le permite al usuario ver una gran cantidad de películas de forma gratuita, tiene una interfaz agradable y amistosa.',
      herramientas: 'Lenguajes de programación  Dart, javascript.  Framework Flutter, Google play console for developers, Firebase, mongoDB, Nodejs (Api-rest), GraphQl, Heroku,  Docker, Docker-compose.',
      herramientasForIcons:['javascript', 'react', 'tailwind', 'css5', 'html5', 'mongodb', 'firebase', 'herok'],
      url_del_sitio: "https://play.google.com/store/apps/details?id=com.fanaticpelis.fanpelis",
      url_github_repositorio:"",
      screenshots:[],
      simpleDiagram:{
         title:'Simple site diagram',
         url_image:[
            
         ]
        },
        architecture:{
         title:'Architecture',
         url_images:[
            
         ]
        },
        credenciales_acceso:{
         user:'',
         password:''
      }
     }
   
  ]
     
    


export default {
    portafolio
}