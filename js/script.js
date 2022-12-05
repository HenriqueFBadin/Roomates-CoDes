img = ["img/homem.png", "img/Pedro2.png"];
img_2 = ["img/Laura.png", "img/mulher.png"];
img_3 = ["img/Emilia.png", "img/homem.png"];
img_4 = ["img/Milton.png", "img/milton2.png"];
img_fim = ["img/Escudo.png"];

person_1 = {
    firstName: "Pedro",
    lastName : "da Silva",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img,
    likes: 0,
    show: true,
    match: 0,
    descricao: "Oi, eu sou o Pedro. Tenho 17 anos, sou uma pessoa muito organizada e que tem aeromodelismo como hobby.",
    genero: "h"
  };

person_2 = {
    firstName: "Laura",
    lastName : "Cordeiro",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_2,
    likes: 0,
    show: true,
    match: 0,
    descricao: "Laura, 19 anos. Adoro festas, sou meio bagunceira e adoro futebol!",
    genero: "m"
  };
  
person_3 = {
    firstName: "Emília",
    lastName : "Andrade",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_3,
    likes: 0,
    show: true,
    match: 1,
    descricao: "Meu nome é Emília, sou mineira e acabei de fazer 18 anos e estou me mudando para São Paulo para cursas direito.",
    genero: "m"
  };
  
person_4 = {
    firstName: "Milton",
    lastName : "Ferreira",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_4,
    likes: 0,
    show: true,
    match: 0,
    descricao: "Meu nome é Milton, tenho 24 anos sou goiano, amo música e gasto muito tempo dentro da minha residência.",
    genero: "h"
  };
  
person_5 = {
    firstName: "Não",
    lastName : "Existe",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_fim,
    likes: 0,
    show: true,
    match: 0,
    descricao: "",
    genero: "m"
  };

document.addEventListener('DOMContentLoaded', function(event){    

    pos_imgs = 0;

    dictionary = [person_1, person_2, person_3, person_4, person_5];

    person_n = 0;

    img_ps = dictionary[person_n].photos[pos_imgs];

    im = document.querySelector('.imagem-pessoa');
    im.src = img_ps;

    modal_text = document.getElementById("modal_text");

    button = document.querySelectorAll('.passar');

    button[0].addEventListener('click', function(event){
        
        pos_imgs = pos_imgs - 1
        if (pos_imgs<0){
            pos_imgs = img.length - 1
        };

        img_ps = dictionary[person_n].photos[pos_imgs];
        
        im1 = document.querySelector('.imagem-pessoa');

        im1.src = img_ps;

        console.log(img_ps);
    });

    button[1].addEventListener('click', function(event){
        pos_imgs+=1
        if (pos_imgs>(img.length - 1)){
            pos_imgs = 0
        };

        img_ps = dictionary[person_n].photos[pos_imgs];

        console.log(img_ps);

        im2 = document.querySelector('.imagem-pessoa');

        im2.src = img_ps;
    });

    likeness = document.querySelectorAll('.confirmar');

    likeness[0].addEventListener('click', function(event){
        if (dictionary[person_n].show == true){

            dictionary[person_n].likes = dictionary[person_n].likes + 1
            
            dictionary[person_n].show = false

            localStorage.setItem(dictionary[person_n].firstName, dictionary[person_n].likes)

            localStorage.setItem("show", dictionary[person_n].show)

            console.log(dictionary[person_n]);

            if (dictionary[person_n].match == 1){
                modal.style.display = "block";
                console.log("oi")
                console.log(dictionary[person_n].match)
                modal_text.textContent = "Agora você e " + dictionary[person_n].firstName + " podem trocar mensagens na aba de Chat para se conhecerem melhor!"
            }

            person_n += 1

            if (person_n > (dictionary.length - 1)){
                person_n = 5
                dictionary[person_n].show = true
                console.log("Lista de sugestões vazia")
            };

            console.log(dictionary[person_n]);

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

            dtexto.textContent = dictionary[person_n].descricao

            console.log(dtexto.textContent)

        };
    });

    likeness[1].addEventListener('click', function(event){
        if (dictionary[person_n].show == true){

            dictionary[person_n].likes = dictionary[person_n].likes - 1
            
            dictionary[person_n].show = false

            localStorage.setItem(dictionary[person_n].firstName, dictionary[person_n].likes)

            localStorage.setItem("show", dictionary[person_n].show)

            console.log(dictionary[person_n]);

            person_n += 1
            if (person_n > (dictionary.length - 1)){
                person_n = 5
                dictionary[person_n].show = true
                console.log("Lista de sugestões vazia")
            };

            console.log(dictionary[person_n]);

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

            dtexto.textContent = dictionary[person_n].descricao

            console.log(dtexto.textContent)

        };
    });

    dtexto = document.querySelector('.dtexto');

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function(event) {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


