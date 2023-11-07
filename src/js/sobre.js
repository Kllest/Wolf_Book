const isMobile = window.matchMedia("(max-width: 800px)").matches;
var um = document.getElementById('um')
var dois = document.getElementById('dois')
var tres = document.getElementById('tres')
var local = document.getElementById('local')
var hiperl = document.getElementById('letra')

um.addEventListener('mouseenter', entrar)
dois.addEventListener('mouseenter',sobre)
tres.addEventListener('mouseenter', cima)


um.addEventListener('mouseout', sair)
dois.addEventListener('mouseout', fora)
tres.addEventListener('mouseout', mover)

function entrar(){
    if (window.innerWidth > 800){
        um.style.background = 'white'
    um.style.color = 'orange'
    }
}
function sobre() {
    if (window.innerWidth > 800) {
        dois.style.background = 'white'
        dois.style.color = 'orange'
    }  
   
}
function cima() {
    if(window.innerWidth > 800){
        tres.style.background = 'white'
        tres.style.color = 'orange'

    }
   
}

function sair() {
    if (window.innerWidth > 800) {
        um.style.background = 'black'
        um.style.color = 'orange'
    }
    
}
function fora() {
    if (window.innerWidth > 800) {
        dois.style.background = 'black'
        dois.style.color = 'orange'
    }
   
}
function mover() {
    if (window.innerWidth > 800) {

      tres.style.background = 'black'
        tres.style.color = 'orange'  
    }
    

}
