function barrap() {
    let input = document.getElementById('barra').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('card');
   


    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            
          
            
        } else {
            x[i].style.display = "list-item";
          
            
            
        }
        
    }
    

    // Verifique se o input está vazio e, se estiver, redefina o estilo para mostrar todos os elementos
    if (input === '') {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "list-item";
           
           
        }
    }
}