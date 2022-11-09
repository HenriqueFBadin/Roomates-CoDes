img = ["img/mulher.png", "img/homem.png"];

document.addEventListener('DOMContentLoaded', function(event){
    pos_imgs = 0
    img_ps = img[pos_imgs];

    im = document.querySelector('.imagem-pessoa')
    im.src = img_ps

    button = document.querySelectorAll('.passar')

    button[0].addEventListener('click', function(event){
        
        pos_imgs = pos_imgs - 1
        if (pos_imgs<0){
            pos_imgs = img.length - 1
        }
        img_ps = img[pos_imgs]
        
        im1 = document.querySelector('.imagem-pessoa')
        im1.src = img_ps

        console.log(img_ps)
    })

    button[1].addEventListener('click', function(event){
        pos_imgs+=1
        if (pos_imgs>(img.length - 1)){
            pos_imgs = 0
        }
        img_ps = img[pos_imgs]
        console.log(img_ps)

        im2 = document.querySelector('.imagem-pessoa')
        im2.src = img_ps
    })
})