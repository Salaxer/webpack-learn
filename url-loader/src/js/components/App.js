import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

console.log(data);
function App() {
    const [loaderList, setLoader] = useState([]);
    function handleClick() {
        setLoader(data.loaders);
    }
    return(
        <div>
            Que linda Aplicacion hecha en React
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo}  alt="" width={40}/>
            </p>
            <ul>
                {
                    // Mandamos a llamar a Loader y le mandamos el dato que es el item y una llame que es la id
                    loaderList.map((item)=><Loader {...item}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App;