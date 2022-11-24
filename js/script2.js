
document.addEventListener('DOMContentLoaded', function(event){
    img_casa=document.querySelectorAll('.img3');
    lista=document.querySelector('.lista');
    vai=document.querySelectorAll('.border4')
    x=lista.remove()
    img_casa[0].addEventListener('click',function(event){
        i=0
        if(x==lista.remove() && i==0){
            x=vai[0].append(lista);
            i=1
        }
        if(x=vai[0].append(lista) && i==0){
            x=lista.remove()
        }
    })

})