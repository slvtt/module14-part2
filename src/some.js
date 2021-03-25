const clickCounter = (btn,count,elem) =>{
    btn.addEventListener('click',() =>{
        count++;
        elem.innerHTML = count;
    })
}
