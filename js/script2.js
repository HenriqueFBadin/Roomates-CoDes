
document.addEventListener('DOMContentLoaded', function(event){
    img_casa=document.querySelectorAll('.img3');
    vai=document.querySelectorAll('.border4')
    lista=document.querySelector('.lista')
    x=lista.remove()
    pi=true
    img_casa[0].addEventListener('click',function(event){
        if(pi){
            x=vai[0].append(lista)
            pi=false
        }   
        else{
            x=lista.remove()
            
            pi=true
        }
    })

})