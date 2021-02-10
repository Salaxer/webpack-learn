// importamos un modulo
//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    // Todo lo que estare anexando a la entrada, este caso solo es el archivo index.js
    entry:{
        home: path.resolve(__dirname,'src','js','index.js')
    } ,
    // seleccionamos el modo
    mode: 'development',
    output: {
        // devuelve rutas absolutas, partiendo de la ruta actual y manda mi archivo final ahi
        // con una coma despues del __dirname podemos colocar as carpetas dentro de nuestro servidor, comunmente se usa dist
        path: path.resolve(__dirname,'dist'),
        // ahora tenemos que nombrar nuestro archivo final
        filename: 'js/[name].js'
    },
    // Esto sirve para que nuestro servidor se este actualizando en cada cambio
    devServer:{
        // recive los cambios sin recargar la pagina
        hot: true,
        // abre el navegador sin estar preionando el localhost
        open: true,
        port: 9000,
    },
    // Para agregar modulos
    module:{
        rules:[
            {
                // Aqui le estoy diciendo que acepte cualquier archivo que termine en css. sera interpretado
                test: /\.js$/,
                // aqui usamos algunas dependencias que se rquiere para aceptar codigo css en js
                // el css-loader sirve para que mi codigo no se rompa y el otro sirve para injectar el codigo en mi js
                // primero se ejecutan los ultimos, que en este caso es el css-loader y despues se ejecuta el style-loader
                // va de derecha a izquierda 
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                // Aqui le estoy diciendo que acepte cualquier archivo que termine en css. sera interpretado
                test: /\.css$/,
                // aqui usamos algunas dependencias que se rquiere para aceptar codigo css en js
                // el css-loader sirve para que mi codigo no se rompa y el otro sirve para injectar el codigo en mi js
                // primero se ejecutan los ultimos, que en este caso es el css-loader y despues se ejecuta el style-loader
                // va de derecha a izquierda 
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    // este plugin sirve para exportar un archivo css en un archivo diferente
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Plugins',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}