
document.addEventListener('DOMContentLoaded', function(event){
    img_casa=document.querySelectorAll('.img3');
    vai=document.querySelectorAll('.border4')
    lista=document.querySelectorAll('.lista')
    x=lista[0].remove()
    y=lista[1].remove()
    z=lista[2].remove()
    a=lista[3].remove()
    pi=true
    testes=document.querySelectorAll('.moema')
    for(i of testes){
        i.style.color='#FFFFFF'
    }

    ///lista 1//
    img_casa[0].addEventListener('click',function(event){
        if(pi){
            x=vai[0].append(lista[0])
            pi=false
        }   
        else{
            x=lista[0].remove()
            
            pi=true
        }
    })


    ///lista 2///
    img_casa[1].addEventListener('click',function(event){
        if(pi){
            x=vai[1].append(lista[1])
            pi=false
        }   
        else{
            x=lista[1].remove()
            
            pi=true
        }
    })


    ///lista 3///
    img_casa[2].addEventListener('click',function(event){
        if(pi){
            x=vai[2].append(lista[2])
            pi=false
        }   
        else{
            x=lista[2].remove()
            
            pi=true
        }
    })

    ///lista 4////
    img_casa[3].addEventListener('click',function(event){
        if(pi){
            x=vai[3].append(lista[3])
            pi=false
        }   
        else{
            x=lista[3].remove()
            
            pi=true
        }
    })

})