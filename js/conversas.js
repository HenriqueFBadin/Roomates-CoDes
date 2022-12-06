document.addEventListener('DOMContentLoaded', function(){
    main = document.querySelector('main');
    listamensagens = documento.querySelector('#mensagens')
    var button = document.querySelector(".botao-enviar");
    var input = document.querySelector("input");
    button.addEventListener("click", function(event){
        var texto = input.value;
        li_novo = document.createElement("li");
        div1 = li_novo.createElement('div');
        h2_1 = document.createElement('h2');
        h2_1.innerHTML = 'Nome do Usuário';
        h3_1 = document.createElement('h3');
        h3_1.innerHTML = 'Horário';
        div1.appendChild(h2_1);
        div1.appendChild(h3_1);
        section_novo.appendChild(div1);
        div2 = document.createElement('div');
        div2.classList.add("bolha-resposta");
        p1_2 = document.createElement("p");
        p1_2.innerHTML = texto;
        div2.appendChild(p1_2);
        section_novo.appendChild(div2);
        span1 = document.createElement('span');
        span1.id = "notificacao-msg-4";
        section_novo.appendChild(span1);
        listamensagens.appendChild(li_novo);
    });

});
