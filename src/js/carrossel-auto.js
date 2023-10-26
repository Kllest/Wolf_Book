const imgs = document.getElementById("imagem-carrossel");
const imgElements = imgs.querySelectorAll(".imagem-automatico");
let idx = 0;

function carrossel() {
    imgElements[idx].classList.remove("mostrar-imagem");
    idx = (idx + 1) % imgElements.length;
    imgElements[idx].classList.add("mostrar-imagem");
}

carrossel(); // Exibir a primeira imagem imediatamente
setInterval(carrossel, 3100);


