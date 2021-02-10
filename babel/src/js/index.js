
import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('Quien es ese poquemon')

search(id)
.then((data)=>{
    render(data);
}).catch(()=>{
    console.log('No hubo pokemon');
})



// import text from './text';
// text();
// if(module.hot){
//     module.hot.accept('./text.js', function () {
//         console.log('He recargado en caliente');
//         text();
//     })
// }
