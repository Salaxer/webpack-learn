
import '../css/index.css';

// Es muy importante importar estas dos dependencias en donde las utilices ya que entre ambas se necesitan
import React from "react";
import {render} from 'react-dom';

import App from './components/App.js'
// Aqui react renderiza lo que hizo e injecta lo renderizado en el documento con esa id
render(<App/>, document.getElementById('container'));


