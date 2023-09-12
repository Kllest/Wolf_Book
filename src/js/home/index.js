function mostrarSecao(id) {
    const secoes = document.querySelectorAll('main');
    for (const secao of secoes) {
        secao.style.display = 'none';
    }
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}

// Adicione um ouvinte de eventos de clique aos links de navegação
document.addEventListener('DOMContentLoaded', function () {
    const linksNavegacao = document.querySelectorAll('.navegacao a');
    for (const link of linksNavegacao) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const secaoAlvo = this.getAttribute('href').substring(1); // Remove o "#" do href
            mostrarSecao(secaoAlvo);
        });
    }
});