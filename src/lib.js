
export const clickCounter = (btn,elem,count) =>{
        btn.addEventListener('click',()=>{
            elem.innerHTML = `Сделан ${count++} click`;
        })
    }
