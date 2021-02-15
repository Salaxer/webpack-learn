// importamos un modulo
//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');
const { library } = require('webpack');
const webpack = require('webpack');
module.exports={
    // Todo lo que estare anexando a la entrada
// Colocamos las dependencias core que se repite su uso en nuestra app en el entry de nuestro webpack.dll.config.js.
//  para guardarla en cache del navegador y precargarlas.
// webpack.dll.config.js
// Solo importamos react ya que este lo utilizamos en todo lo demas
    entry:{
        modules:[
            'react',
            'react-dom'
        ]
    } ,
    // seleccionamos el modo
    mode: 'production',
    output: {
        // devuelve rutas absolutas, partiendo de la ruta actual y manda mi archivo final ahi
        // con una coma despues del __dirname podemos colocar as carpetas dentro de nuestro servidor, comunmente se usa dist
        path: path.resolve(__dirname,'dist'),
        // ahora tenemos que nombrar nuestro archivo final
        filename: 'js/[name].js',
        // Gracias a esto enlazamos de manera global a nuestro modulo
        library: '[name]'
    },
    // este plugin sirve para exportar un archivo css en un archivo diferente
    plugins:[
        new webpack.DllPlugin({
            // Como quiero llamar mi archivo de dll
            name:'[name]',
            // En donde quiero ubicar mi archivo dll
            // Para que tome mi directorio y le ponga el nombre de [name]
            path: path.join(__dirname, '[name].manifest.json')
        })
    ],
}