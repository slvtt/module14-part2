
import './css/button.css';
import html from '/index.html'

(() => {
    const block = document.querySelector('.create');
    const btnClick = document.querySelector('.btn');
    let counter = 1;
    btnClick.addEventListener('click',()=>{
        block.innerHTML =`Сделан ${counter++} click` ;
    });

})()