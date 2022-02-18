const nav= document.querySelector('nav')


window.addEventListener('scroll',()=>{
    y= window.scrollY;

    if(y > 50){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active')
    }
});