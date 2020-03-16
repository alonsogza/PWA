"use strict";

// < Clase 35 >
// self.addEventListener('fetch', event => {
//     console.log()
// })

// < Clase 36 - Service Worker / Fetch Event >
// self.addEventListener("fetch", event => {
// //   Se observan las peticiones (GET, la direccion donde la esta consumiento)
//     console.log(event);
//   //  con esta instruccion buscamos el  archivo style.css
//   if (event.request.url.includes('style.css')){
//       //  con esta instruccion se bloqueoa el archivo style.css
//       event.respondWith(null);
//   }else{
//       event.respondWith(fetch( event.request))
//   };
// });

// < Clase 37 >
//   self.addEventListener("fetch", event => {  
//   // En este ejercicio obtenemos la peticion de la imagen y la gauramos en una imagen
//   if ( event.request.url.includes('.jpg')){
//       console.log(event.request.url);
//       // Respuesta:
//       // http://127.0.0.1:5500/img/main.jpg
//       // Ahora lo atrapamos en una variable e imprimimos la variable
//       // let fotoReq = fetch('img/main.jpg');
//       // let fotoReq = fetch( event.request.url); // Esta es otra forma de obtener la ruta
//       let fotoReq = fetch( event.request ); // Otra Manera
//       event.respondWith(fotoReq);
//       // Respuesta:
//       // http://127.0.0.1:5500/img/main.jpg
//   }
// });

// // < Clase 38 - Modificacion del SW / Fetch Event >
// // Ejercicio para modificar petición del style.CSS
// self.addEventListener('fetch', event => {
//     // Buscamos dentro del URL los estilos.
//     if ( event.request.url.includes('style.css')){
//         // Remplazamos el estilo.
//         let respuesta = new Response(`
//             body {
//                 background-color: red;
//                 color: pink;
//             }
//         `, {
//         // Modificamos los Headers
//         headers: {
//           'Content-Type': 'text/css'
//         }
//       });

//     // Regresamos la peticion
//     event.respondWith(respuesta);
//   }
// });


// // < Clase 39 - Interceptar y Modificacion Peticiones >
// // Ejercicio encontrar la peticion de main.jpg para cambiarla a main-patas-arriba.jpg
// self.addEventListener('fetch', event => {

//     // // Mi Codigo
//     if ( event.request.url.includes('main.jpg')){
//         let fotoReq = fetch('img/main-patas-arriba.jpg');
//         event.respondWith(fotoReq);
//     };

//     // // Codigo de Fernando Herrera.
//     // if ( event.request.url.includes('main.jpg')){
//     //     event.respondWith( fetch('img/main-patas-arriba.jpg') );
//     // };
//     // PD: Fernando Herrera recomiendo que es más limpio la solucion que escribi.
// });

// // < Clase 40 - Manejo de errores en el Fetch Event >
self.addEventListener('fetch', event => { 
// Para este ejercicio en la pestaña APLICATION quitemos la opcion UPDATE ON RELOAD

    // // funciona
    // event.respondWith(
    //     fetch( event.request )
    //         .then( resp => {

    //             // Con estas lineas de codigo vemos el error del main-2
    //             // console.log(resp);
    //             // return resp;

    //             //Con estas lineas resolvemos la imagen 2. ¡¡¡OJO como esta, todo error lo va a cambiar por imagen!!!
    //             if ( resp.ok ){
    //                 return resp;
    //             } else {
    //                 return fetch( 'img/main.jpg');
    //             }
                
    //         })
    // );

    // Fernando realizo un codigo más optimo
    const resp = fetch( event.request )
        .then( resp => {
            // Esta linea es un operador ternario, algo asi IFF( compartivo, verdadero,  falso)
            return resp.ok ? resp: fetch('img/main.jpg');

        });

    event.respondWith(resp)

});