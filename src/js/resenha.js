function barrap() {
    let input = document.getElementById('barra').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('objeto')
    let lista = document.getElementById('lista')

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
            x[i].style.display = "none"
        } else {
            x[i].style.display = "list-item"
        }
        
    }

}
function fechar_abrir() {
    var lista = document.getElementById('lista')
    var elemento = document.getElementById('body')

    if (lista.style.display == 'none') {
        lista.style.display = 'block'
    } else {
        lista.style.display = 'none'
    }

}
document.addEventListener('click', function (event) {
    var lista = document.getElementById('lista');
    var barra = document.getElementById('barra');

    if (event.target !== barra && event.target !== lista) {
        lista.style.display = 'none';
    }
});

