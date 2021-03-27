
import './css/button.css';
import html from '/index.html'
import './lib.js'
import { clickCounter } from './lib.js';

    const block = document.querySelector('.create');
    const btnClick = document.querySelector('.btn');
    let counter = 1;

clickCounter(btnClick,block,counter)

// (() => {

//     btnClick.addEventListener('click',()=>{
//         block.innerHTML =`Сделан ${counter++} click` ;
//     });

// })()