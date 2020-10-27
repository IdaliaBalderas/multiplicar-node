//requireds
//const fs = require('fs');
//const fs = require('express'); 
//const fs = require(''); 

//const { crearArchivo } = require("./multiplicar/multiplicar");



//let base = 5;
//console.log(module);
/*let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i}=${base*i}`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
}); 

crearArchivo(base)
.then(archivo=> console.log(`Archivo creado: ${ archivo }`)); */
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]