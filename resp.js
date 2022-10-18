burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav_list')
rightNav =document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})
// boton =document.querySelector('.btn-sm')
// boton.addEventListener('oncli')
//myFunction()