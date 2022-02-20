const nav= document.querySelector('nav')


window.addEventListener('scroll',()=>{
    y= window.scrollY;

    if(y > 50){
        nav.classList.add('active2');
    }else{
        nav.classList.remove('active2')
    }
});

let menu = document.getElementById('menu-js');
let toggleNav = document.getElementById('toggle-js');

toggleNav.addEventListener('click', function (){
    menu.classList.toggle('active')
})