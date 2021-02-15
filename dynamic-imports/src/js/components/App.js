import React, { useState } from 'react';
import logo from '../../images/platzi.png'
import data from './data.json';
import Loader from './loader';
/*importamos los archivos css*/
import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'
import { alerta } from './alert';

console.log(data);
function App() {
    const [loaderList, setLoader] = useState([]);
    // Ahora para que cargue mi funcion necesito decirle que sera una funcion asincrona
    async function handleClick() {
        setLoader(data.loaders);
        // Aqui hago mi import de mi boton de mi handleClick
        const {alert} = await import('./alert');
        // aqui lo mando a llamar, pero espero a que cargue
        alerta('omg, este modulo ha cargado dinamicamente')
    }
    return(
        <div>
            <p className="sass">
                Esto es sass
            </p>
            <p className="less">
                Esto es less
            </p>
            <p className="stylus">
                Esto es stylus
            </p>
            <p className="post-css">
                Esto es postcss
            </p>
            Que linda Aplicacion hecha en React
            {/* <video src={video} width={360} controls poster={logo}></video> */}
            <p>
                <img src={logo}  alt="" width={40}/>
            </p>
            <ul>
                {
                    // Mandamos a llamar a Loader y le mandamos el dato que es el item y una llame que es la id
                    loaderList.map((item)=><Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App;