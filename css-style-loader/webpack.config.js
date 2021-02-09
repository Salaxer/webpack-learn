// importamos un modulo
//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');

module.exports={
    // Todo lo que estare anexando a la entrada, este caso solo es el archivo index.js
    entry: path.resolve(__dirname,'src','js','index.js'),
    // seleccionamos el modo
    mode: 'development',
    output: {
        // devuelve rutas absolutas, partiendo de la ruta actual y manda mi archivo final ahi
        // con una coma despues del __dirname podemos colocar as carpetas dentro de nuestro servidor, comunmente se usa dist
        path: path.resolve(__dirname,'dist','js'),
        // ahora tenemos que nombrar nuestro archivo final
        filename: 'bundle.js'
    },
    // Para agregar modulos
    module:{
        rules:[
            {
                // Aqui le estoy diciendo que acepte cualquier archivo que termine en css. sera interpretado
                test: /\.css$/,
                // aqui usamos algunas dependencias que se rquiere para aceptar codigo css en js
                // el css-loader sirve para que mi codigo no se rompa y el otro sirve para injectar el codigo en mi js
                // primero se ejecutan los ultimos, que en este caso es el css-loader y despues se ejecuta el style-loader
                // va de derecha a izquierda 
                use: ['style-loader','css-loader'],
                
            }
        ]
    }
}