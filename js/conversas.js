document.addEventListener('DOMContentLoaded', function(){
    main = document.querySelector('main');
    listamensagens = document.querySelector('#mensagens')
    button = document.querySelector(".botao-enviar");
    input = document.querySelector("input");
    h3 = document.querySelector("h3");
    h3.innerHTML = "Visto por último às " + (now.getHours() - 1) + ":" + now.getMinutes() + ":" + now.getSeconds();
    button.addEventListener("click", function(event){
        var texto = input.value;
        textosplit = texto.split(" ");
        for (var i = 0; i < textosplit.lenght; i++){
            console.log(1);
            textosplit[i].replace('?',' ');
            textosplit[i].replace('!',' ');
        }
        console.log(textosplit);
        input.value = "";
        li_novo = document.createElement("li");
        li_novo.classList.add("msg-usuario");
        div1 = document.createElement('div');
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
        console.log(textosplit.lenght);
        for (var i = 0; i < textosplit.lenght;i++){
            textosplit[i].toLowerCase();
        }
        console.log(textosplit);
        if (textosplit.includes("gosta") || textosplit.includes("sair") || textosplit.includes("festa") || textosplit.includes("limpeza")){
            li_novo = document.createElement("li");
            li_novo.classList.add("msg-resposta");
            div1 = document.createElement('div');
            div1.classList.add("msg-resposta");
            h2_1 = document.createElement('h2');
            h2_1.innerHTML = 'Emilia';
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
            if (textosplit.includes("gosta") && textosplit.includes("sair")){
                p1_2.innerHTML = "Não muito";
            }
            else if (textosplit.includes("responsável") || textosplit.includes("limpeza")){
                p1_2.innerHTML = "Gosto da casa sempre bem limpinha, estaria diposta a te ajudar com o possível";
            }
            else if (textosplit.includes("gosta") || textosplit.includes("festa")){
                p1_2.innerHTML = "As vezes, mas só se você também quisesse no caso, geralmente só faço com amigos";
            }
            else{
                p1_2.innerHTML = "Não sei bem o que dizer, tente ser mais específica usando as palavras 'gosta', 'sair', 'festa' e 'limpeza'";
            }
            p1_2.classList.add("textosmensagens");
            div2.appendChild(p1_2);
            div2.classList.add("bolha-usuario");
            li_novo.appendChild(div2);
            span1 = document.createElement('span');
            span1.id = "notificacao-msg-4";
            li_novo.appendChild(span1);
            listamensagens.appendChild(li_novo);
        }
    });

});
