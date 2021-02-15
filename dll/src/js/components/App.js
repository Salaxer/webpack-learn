import React, { useState } from 'react';
import logo from '../../images/platzi.png'
import data from './data.json';
import Loader from './loader';
/*importamos los archivos css*/
import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data);
function App() {
    const [loaderList, setLoader] = useState([]);
    function handleClick() {
        setLoader(data.loaders);
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