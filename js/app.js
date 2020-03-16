'use strict'

// if ('serviceWorker' in navigator){
//     console.log('Podemos Usarlo !');
// }

// Confirmar si podemos usar el SW
if( navigator.serviceWorker ){
    navigator.serviceWorker.register('/sw.js');

    console.log('Podemos usar SW');
}