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
    um.style.background = 'white'
    um.style.color = 'black'
}
function sobre() {
    dois.style.background = 'white'
    dois.style.color = 'black'
}
function cima() {
    tres.style.background = 'white'
    tres.style.color = 'black'
}

function sair() {
    um.style.background = 'black'
    um.style.color = 'orange'
}
function fora() {
    dois.style.background = 'black'
    dois.style.color = 'orange'
}
function mover() {
    tres.style.background = 'black'
    tres.style.color = 'orange'

}
