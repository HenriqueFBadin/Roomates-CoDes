document.addEventListener('DOMContentLoaded', function(){
    now = new Date
    main = document.querySelector('main');
    listamensagens = document.querySelector('#mensagens')
    button = document.querySelector(".botao-enviar");
    console.log(button);
    input = document.querySelector("input");
    h3 = document.querySelector("h3");
    h3.innerHTML = "Visto por último às " + (now.getHours() - 1) + ":" + now.getMinutes() + ":" + now.getSeconds();
    button.addEventListener("click", function(event){
        var texto = input.value;
        li_novo = document.createElement("li");
        div1 = document.createElement('div');
        h2_1 = document.createElement('h2');
        h2_1.innerHTML = 'Sheyla';
        h2_1.classList.add("textosmensagens"); 
        h2_1.classList.add("usuarioresposta");
        h3_1 = document.createElement('h3');
        now = new Date
        h3_1.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        h3_1.classList.add("textosmensagens");
        h3_1.classList.add("usuarioresposta");
        div1.appendChild(h2_1);
        div1.appendChild(h3_1);
        li_novo.appendChild(div1);
        div2 = document.createElement('div');
        p1_2 = document.createElement("p");
        p1_2.innerHTML = texto;
        p1_2.classList.add("textosmensagens");
        div2.appendChild(p1_2);
        div2.classList.add("bolha-resposta");
        li_novo.appendChild(div2);
        span1 = document.createElement('span');
        span1.id = "notificacao-msg-4";
        li_novo.appendChild(span1);
        listamensagens.appendChild(li_novo);
    });

});
