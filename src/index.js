
import './css/button.css';
import html from '/index.html'

(() => {
    const btnClick = document.querySelector('.btn');
    const str = 'World';

    btnClick.addEventListener('click',()=>{
        btnClick.textContent = `Hello ${str}`;
    });

})()