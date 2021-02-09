// importamos un modulo
//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');

module.exports={
    // Todo lo que estare anexando a la entrada, este caso solo es el archivo index.js
    // para recivir mas entradas podemos pasarle un objeto
    entry:{
        home: path.resolve(__dirname,'src','js','index.js'),
        price: path.resolve(__dirname,'src','js','price.js'),
        contact: path.resolve(__dirname,'src','js','contact.js'),
    },
    // seleccionamos el modo
    mode: 'development',
    output: {
        // devuelve rutas absolutas, partiendo de la ruta actual y manda mi archivo final ahi
        // con una coma despues del __dirname podemos colocar as carpetas dentro de nuestro servidor, comunmente se usa dist
        path: path.resolve(__dirname,'dist','js'),
        // ahora tenemos que nombrar nuestro archivo final
        // el [name] corresponde a los nombres del objeto entry home,price y contact
        filename: '[name].js'
    }
}