let navbar=document.querySelector('.header .navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('acive');
}
document.querySelector('#close-navbar').onclick=()=>{
    navbar.classList.remove('active');
}



