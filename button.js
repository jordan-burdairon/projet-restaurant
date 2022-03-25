const button = document.querySelector('.button');
window.addEventListener('scroll', ()=>{     
    if(window.scrollY < 100){
        button.style.display="none";        
    } else{
        button.style.display="flex";
    }
})

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }) 
})
