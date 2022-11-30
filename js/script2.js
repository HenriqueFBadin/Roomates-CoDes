
document.addEventListener('DOMContentLoaded', function(event){
    img_casa=document.querySelectorAll('.img3');
    vai=document.querySelectorAll('.border4')
    lista=document.querySelectorAll('.lista')
    primeiro_top = document.querySelectorAll('.border5')
    dois_a_cinco_top=document.querySelectorAll('.border6')
    sexto_top=document.querySelectorAll('.border7')
    x=lista[0].style.display='none'
    y=lista[1].style.display='none'
    z=lista[2].style.display='none'
    a=lista[3].style.display='none'
    pi=true
    console.log(primeiro_top)

    testes=document.querySelectorAll('.moema')
    for(i of testes){
        i.style.color='#FFFFFF'
    }

    ///lista 1//
    img_casa[0].addEventListener('click',function(event){
        if(pi){
            x=lista[0].style.display='block'
            pi=false
        }   
        else{
            x=lista[0].style.display='none'
            
            pi=true
        }
    })

        primeiro_top[0].addEventListener('click',function(event){
            testes[0].innerHTML=primeiro_top[0].innerHTML
            testes[0].style.color='#000000'
    
        })
        dois_a_cinco_top[0].addEventListener('click',function(event){
            testes[0].innerHTML=dois_a_cinco_top[0].innerHTML
            testes[0].style.color='#000000'
    
        })
        dois_a_cinco_top[1].addEventListener('click',function(event){
            testes[0].innerHTML=dois_a_cinco_top[1].innerHTML
            testes[0].style.color='#000000'
    
        })
        dois_a_cinco_top[2].addEventListener('click',function(event){
            testes[0].innerHTML=dois_a_cinco_top[2].innerHTML
            testes[0].style.color='#000000'
    
        })
        dois_a_cinco_top[3].addEventListener('click',function(event){
            testes[0].innerHTML=dois_a_cinco_top[3].innerHTML
            testes[0].style.color='#000000'
    
        })
        sexto_top[0].addEventListener('click',function(event){
            testes[0].innerHTML=sexto_top[0].innerHTML
            testes[0].style.color='#000000'
    
        })
 
    



    ///lista 2///
    img_casa[1].addEventListener('click',function(event){
        if(pi){
            y=lista[1].style.display='block'
            pi=false
        }   
        else{
            y=lista[1].style.display='none'
            
            pi=true
        }
    })

        primeiro_top[1].addEventListener('click',function(event){
            testes[1].innerHTML=primeiro_top[1].innerHTML
            testes[1].style.color='#000000'
    
        })
        dois_a_cinco_top[4].addEventListener('click',function(event){
            testes[1].innerHTML=dois_a_cinco_top[4].innerHTML
            testes[1].style.color='#000000'
    
        })
        dois_a_cinco_top[5].addEventListener('click',function(event){
            testes[1].innerHTML=dois_a_cinco_top[5].innerHTML
            testes[1].style.color='#000000'
    
        })
        dois_a_cinco_top[6].addEventListener('click',function(event){
            testes[1].innerHTML=dois_a_cinco_top[6].innerHTML
            testes[1].style.color='#000000'
    
        })
        dois_a_cinco_top[7].addEventListener('click',function(event){
            testes[1].innerHTML=dois_a_cinco_top[7].innerHTML
            testes[1].style.color='#000000'
    
        })
        sexto_top[1].addEventListener('click',function(event){
            testes[1].innerHTML=sexto_top[1].innerHTML
            testes[1].style.color='#000000'
    
        })



    ///lista 3///
    img_casa[2].addEventListener('click',function(event){
        if(pi){
            z=lista[2].style.display='block'
            pi=false
        }   
        else{
            z=lista[2].style.display='none'
            
            pi=true
        }
    })

        primeiro_top[2].addEventListener('click',function(event){
            testes[2].innerHTML=primeiro_top[2].innerHTML
            testes[2].style.color='#000000'
    
        })
        dois_a_cinco_top[8].addEventListener('click',function(event){
            testes[2].innerHTML=dois_a_cinco_top[8].innerHTML
            testes[2].style.color='#000000'
    
        })
        dois_a_cinco_top[9].addEventListener('click',function(event){
            testes[2].innerHTML=dois_a_cinco_top[9].innerHTML
            testes[2].style.color='#000000'
    
        })
        dois_a_cinco_top[10].addEventListener('click',function(event){
            testes[2].innerHTML=dois_a_cinco_top[10].innerHTML
            testes[2].style.color='#000000'
    
        })
        dois_a_cinco_top[11].addEventListener('click',function(event){
            testes[2].innerHTML=dois_a_cinco_top[11].innerHTML
            testes[2].style.color='#000000'
    
        })
        sexto_top[2].addEventListener('click',function(event){
            testes[2].innerHTML=sexto_top[2].innerHTML
            testes[2].style.color='#000000'
    
        })


    ///lista 4////
    img_casa[3].addEventListener('click',function(event){
        if(pi){
            a=lista[3].style.display='block'
            pi=false
        }   
        else{
            a=lista[3].style.display='none'
            
            pi=true
        }
    })

        primeiro_top[3].addEventListener('click',function(event){
            testes[3].innerHTML=primeiro_top[3].innerHTML
            testes[3].style.color='#000000'
    
        })
        dois_a_cinco_top[12].addEventListener('click',function(event){
            testes[3].innerHTML=dois_a_cinco_top[12].innerHTML
            testes[3].style.color='#000000'
    
        })
        dois_a_cinco_top[13].addEventListener('click',function(event){
            testes[3].innerHTML=dois_a_cinco_top[13].innerHTML
            testes[3].style.color='#000000'
    
        })
        dois_a_cinco_top[14].addEventListener('click',function(event){
            testes[3].innerHTML=dois_a_cinco_top[14].innerHTML
            testes[3].style.color='#000000'
    
        })
        dois_a_cinco_top[15].addEventListener('click',function(event){
            testes[3].innerHTML=dois_a_cinco_top[15].innerHTML
            testes[3].style.color='#000000'
    
        })
        sexto_top[3].addEventListener('click',function(event){
            testes[3].innerHTML=sexto_top[3].innerHTML
            testes[3].style.color='#000000'
    
        })


})