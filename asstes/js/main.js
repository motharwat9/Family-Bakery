let myNav=document.querySelector("nav");
let navlink = document.querySelectorAll("nav button span");
let navdiv = document.querySelectorAll("nav .collapse");
console.log(navlink)

window.onscroll = function () {

    if(window.scrollY >= 10){
        myNav.style.cssText="background-color:#8e7754;"
    }else {
        myNav.style.cssText="background-color:transparent;"
    }
}
navlink.onclick = function (){
    navdiv.style.cssText="background-color:#8e7754;"
}

