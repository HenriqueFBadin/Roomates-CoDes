document.addEventListener('DOMContentLoaded', function(event){
    
    botao_aplicar = document.querySelector(".botao-aplicar");

    botao_aplicar.addEventListener("click", function(event){
        genero_selecionado = document.querySelector('input[name="genero"]:checked').value;
        localStorage.setItem("genero_escolhido", genero_selecionado);

        localStorage.getItem("genero_escolhido");

        genero_selecionado = document.querySelector('input[name="idade"]:checked').value;
        localStorage.setItem("idade_escolhida", genero_selecionado);

        localStorage.getItem("idade_escolhida");

       

        genero_selecionado = document.querySelector('input[name="nvlorg"]:checked').value;
        localStorage.setItem("nvlorg_escolhido", genero_selecionado);

        localStorage.getItem("nvlorg_escolhido");

        

        genero_selecionado = document.querySelector('input[name="orcamento"]:checked').value;
        localStorage.setItem("orcamento_escolhido", genero_selecionado);

        localStorage.getItem("orcamento_escolhido");

        

        console.log(localStorage)

    });    
});