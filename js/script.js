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
    show: true
  };

const person_2 = {
    firstName: "Geraldo",
    lastName : "Cabral",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    photos: img_2,
    likes: 0,
    show: true
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
            person_n += 1
            if (person_n > (dictionary.length - 1)){
                person_n = 0
            };

            console.log(dictionary[person_n]);

            localStorage.setItem(dictionary[person_n].firstName, dictionary[person_n].likes)

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

            dictionary[person_n].show = false

            localStorage.setItem("show", dictionary[person_n].show)
        };
    });

    likeness[1].addEventListener('click', function(event){
        if (dictionary[person_n].show == true){
            dictionary[person_n].likes = dictionary[person_n].likes - 1
            person_n += 1
            if (person_n > (dictionary.length - 1)){
                person_n = 0
            };

            console.log(dictionary[person_n]);

            img_ps = dictionary[person_n].photos[pos_imgs]

            im = document.querySelector('.imagem-pessoa');

            im.src = img_ps;

            dictionary[person_n].show = false

            localStorage.setItem("show", dictionary[person_n].show)
        };
    });
});