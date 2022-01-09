let menu = document.querySelector('#menu-bar');
let navbar =  document.querySelector('.menu');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('#scroll-top').classList.add('active')
    }else{
        document.querySelector('#scroll-top').classList.remove('active')
    }
}


let list = document.querySelectorAll('.menu-link');
for(let i = 0 ; i < list.length ; i++){
    list[i].onclick = function(){
        let j = 0 ;
        while( j < list.length){
            list[j++].className = 'menu-link';
        } 
        list[i].className = 'menu-link active_mn';
    }
}

function load(){
    document.querySelector('.load-container').classList.add('fade_out')
}
function fade_out(){
    setInterval(load, 3000);
}
window.onload = fade_out()


let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src = "./Image/sun.png"
    }else{
        icon.src = "./Image/moon.png"
    }
    
}