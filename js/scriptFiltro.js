document.addEventListener('DOMContentLoaded', function(event){

    botao_aplicar = document.querySelector(".botao-aplicar");

    botao_limpar = document.querySelector(".botao-limpar");

    botao_aplicar.addEventListener("click", function(event){
        genero_selecionado = document.querySelector('input[name="genero"]:checked')
        if (genero_selecionado != null){
            localStorage.setItem("genero_escolhido", genero_selecionado.value);
        }
        localStorage.getItem("genero_escolhido");

        idade_selecionada = document.querySelector('input[name="idade"]:checked');
        if (idade_selecionada != null){
            localStorage.setItem("idade_escolhida", idade_selecionada.value);
        }
        localStorage.getItem("idade_escolhida");


        nvlorg_selecionado = document.querySelector('input[name="nvlorg"]:checked')
        if (nvlorg_selecionado != null){
            localStorage.setItem("nvlorg_escolhido", nvlorg_selecionado.value);
        }
        localStorage.getItem("nvlorg_escolhido");

        orcamento_selecionado = document.querySelector('input[name="orcamento"]:checked');
        if (orcamento_selecionado != null){
            localStorage.setItem("orcamento_escolhido", orcamento_selecionado.value);
        }
        localStorage.getItem("orcamento_escolhido");
    });

    botao_limpar.addEventListener("click", function(event){
        
        localStorage.removeItem("genero_escolhido");

        localStorage.removeItem("idade_escolhida");

        localStorage.removeItem("orcamento_escolhido");

        localStorage.removeItem("nvlorg_escolhido");

    });

    console.log(localStorage)

    if (localStorage.genero_escolhido != null){
        document.getElementById(localStorage.genero_escolhido).checked = true
    }
    if (localStorage.idade_escolhida != null){
        document.getElementById(localStorage.idade_escolhida).checked = true
    }
    if (localStorage.nvlorg_escolhido != null){
        document.getElementById(localStorage.nvlorg_escolhido).checked = true
    }
    if (localStorage.orcamento_escolhido != null){
        document.getElementById(localStorage.orcamento_escolhido).checked = true
    }
});