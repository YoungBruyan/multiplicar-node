//requiresds
const fs = require('fs');
var colors = require('colors');



let listarTabla = (base, limite = 10) => {
    console.log('===================='.bgMagenta.yellow);
    console.log(`==Tabla de ${base}==`.random);
    console.log('===================='.bgMagenta.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }

}





let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de ${base} no es un numero`);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}x${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}x${limite}.txt`);
        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}