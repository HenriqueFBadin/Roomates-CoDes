img = ["img/mulher.png", "img/homem.png"];
img_2 = ["img/Escudo.png", "img/homem.png"]

const person_1 = {
    firstName: "Pedro",
    lastName : "da Silva",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img,
    likes: 0,
    show: true,
    match: 1
  };

const person_2 = {
    firstName: "Laura",
    lastName : "Cordeiro",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_2,
    likes: 0,
    show: true,
    match: 1
  };

document.addEventListener('DOMContentLoaded', function(event){    

    pos_imgs = 0;

    dictionary = [person_1, person_2];

    person_n = 0;

    img_ps = dictionary[person_n].photos[pos_imgs];

    im = document.querySelector('.imagem-pessoa');
    im.src = img_ps;

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

            person_n += 1
            if (person_n > (dictionary.length - 1)){
                console.log("Lista de sugestões vazia")
            };

            console.log(dictionary[person_n]);

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

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
                console.log("Lista de sugestões vazia")
            };

            console.log(dictionary[person_n]);

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

        };
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    likeness[0].addEventListener('click', function(event) {
        if (dictionary[person_n].show == 1){
            modal.style.display = "block";
            console.log("oi")
        }
    });

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


