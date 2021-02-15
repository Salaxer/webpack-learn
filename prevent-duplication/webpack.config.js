// importamos un modulo
//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    // Todo lo que estare anexando a la entrada, este caso solo es el archivo index.js
    entry:{
        home: path.resolve(__dirname,'src','js','index.js'),
        contact: path.resolve(__dirname,'src','js','contact.js')
    } ,
    // seleccionamos el modo
    mode: 'production',
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
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        // aqui le digo que postcss-loader cargue antes que mi css
                        // ceda la batuta dice el profe
                        loader: 'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
				test: /\.scss$/,
				use: [ 
					"style-loader",
					"css-loader",
					"sass-loader"
					]
			},
			{
				test: /\.less$/,
				use: [ 
					"style-loader",
					"css-loader",
					"less-loader"
					]
			},
			{
				test: /\.styl$/,
				use: [ 
					"style-loader",
					"css-loader",
					"stylus-loader"
				]
			},
            {
                test:/\.jpg|png|gif|woff|eot|svg|ttf|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 900000,
                    }
                }
            }, 
            // La siguiente configuracion sirve para que acepte todo estos tipos de archivos.
            // Para eso tuvimos que haber instalado las dependencias requeridas
                     
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    // este plugin sirve para exportar un archivo css en un archivo diferente
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Plugins',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    // Para que la parte del usuario sea mas rapida y no este cargando todos nuestros modulos cada que una pagina cambie o cargue denuevo
    optimization:{
        splitChunks:{
            // A quien quiero que aplique esta configuracion
            chunks: 'all',
            // Es el tamaño minimo especificado en bits
            // Que se metera a commons
            minSize: 0,
            // Aqui es el nombre del codigo que se repite en todas las paginas
            name: 'commons'
        }
    }
}