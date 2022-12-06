
document.addEventListener('DOMContentLoaded', function(event){
    if(document.querySelector('.lista')!=null){
       
        img_casa=document.querySelectorAll('.img3');
        vai=document.querySelectorAll('.border4')
        lista=document.querySelectorAll('.lista')
        primeiro_top = document.querySelectorAll('.border5')
        dois_a_cinco_top=document.querySelectorAll('.border6')
        sexto_top=document.querySelectorAll('.border7')
        localStorage["preco"]='Teste'
        localStorage["tamanho"]='Teste'
        localStorage["bairro"]='Teste'
        localStorage["rd"]='Teste'
        
        x=lista[0].style.display='none'
        y=lista[1].style.display='none'
        z=lista[2].style.display='none'
        a=lista[3].style.display='none'
        pi=true
        

        testes=document.querySelectorAll('.moema')
        for(i of testes){
            i.style.color='#FFFFFF'
        }
        if(localStorage['bairro3']==0){
            testes[0].innerHTML=localStorage['bairro2']
            if(localStorage['bairro2']!='Teste'){
                testes[0].style.color='#000000'
                localStorage['bairro']=localStorage['bairro2']
            }
 

        }
        if(localStorage['tamanho3']==0){
            testes[3].innerHTML=localStorage['tamanho2']
            if(localStorage['tamanho2']!='Teste'){
                testes[3].style.color='#000000'
                localStorage['tamanho']=localStorage['tamanho2']
            }
 

        }
        if(localStorage['preco3']==0){
            testes[2].innerHTML=localStorage['preco2']
            if(localStorage['preco2']!='Teste'){
                testes[2].style.color='#000000'
                localStorage['preco']=localStorage['preco2']
            }
 

        }
        if(localStorage['rd3']==0){
           
            testes[1].innerHTML=localStorage['rd2']
            
            if(localStorage['rd2']!='Teste'){
                testes[1].style.color='#000000'
                localStorage['rd']=localStorage['rd2']
            }
 

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
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'

                
        
            })
            dois_a_cinco_top[0].addEventListener('click',function(event){
                testes[0].innerHTML=dois_a_cinco_top[0].innerHTML
                testes[0].style.color='#000000'
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'
                
        
            })
            dois_a_cinco_top[1].addEventListener('click',function(event){
                testes[0].innerHTML=dois_a_cinco_top[1].innerHTML
                testes[0].style.color='#000000'
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'
                
        
            })
            dois_a_cinco_top[2].addEventListener('click',function(event){
                testes[0].innerHTML=dois_a_cinco_top[2].innerHTML
                testes[0].style.color='#000000'
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'
                
        
            })
            dois_a_cinco_top[3].addEventListener('click',function(event){
                testes[0].innerHTML=dois_a_cinco_top[3].innerHTML
                testes[0].style.color='#000000'
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'
                
        
            })
            sexto_top[0].addEventListener('click',function(event){
                testes[0].innerHTML=sexto_top[0].innerHTML
                testes[0].style.color='#000000'
                localStorage.setItem('bairro',testes[0])
                localStorage['bairro']=testes[0].innerHTML
                
                x=lista[0].style.display='none'
                
        
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
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'
        
            })
            dois_a_cinco_top[4].addEventListener('click',function(event){
                testes[1].innerHTML=dois_a_cinco_top[4].innerHTML
                testes[1].style.color='#000000'
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'
        
            })
            dois_a_cinco_top[5].addEventListener('click',function(event){
                testes[1].innerHTML=dois_a_cinco_top[5].innerHTML
                testes[1].style.color='#000000'
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'
        
            })
            dois_a_cinco_top[6].addEventListener('click',function(event){
                testes[1].innerHTML=dois_a_cinco_top[6].innerHTML
                testes[1].style.color='#000000'
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'

        
            })
            dois_a_cinco_top[7].addEventListener('click',function(event){
                testes[1].innerHTML=dois_a_cinco_top[7].innerHTML
                testes[1].style.color='#000000'
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'
        
            })
            sexto_top[1].addEventListener('click',function(event){
                testes[1].innerHTML=sexto_top[1].innerHTML
                testes[1].style.color='#000000'
                localStorage.setItem("rd", testes[1]);
                localStorage['rd']=testes[1].innerHTML
                y=lista[1].style.display='none'
                
        
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
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'

        
            })
            dois_a_cinco_top[8].addEventListener('click',function(event){
                testes[2].innerHTML=dois_a_cinco_top[8].innerHTML
                testes[2].style.color='#000000'
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'
        
            })
            dois_a_cinco_top[9].addEventListener('click',function(event){
                testes[2].innerHTML=dois_a_cinco_top[9].innerHTML
                testes[2].style.color='#000000'
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'
        
            })
            dois_a_cinco_top[10].addEventListener('click',function(event){
                testes[2].innerHTML=dois_a_cinco_top[10].innerHTML
                testes[2].style.color='#000000'
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'
        
            })
            dois_a_cinco_top[11].addEventListener('click',function(event){
                testes[2].innerHTML=dois_a_cinco_top[11].innerHTML
                testes[2].style.color='#000000'
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'
        
            })
            sexto_top[2].addEventListener('click',function(event){
                testes[2].innerHTML=sexto_top[2].innerHTML
                testes[2].style.color='#000000'
                localStorage.setItem('preco',testes[2])
                localStorage['preco']=testes[2].innerHTML
                z=lista[2].style.display='none'
        
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
                testes[2].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'
        
            })
            dois_a_cinco_top[12].addEventListener('click',function(event){
                testes[3].innerHTML=dois_a_cinco_top[12].innerHTML
                testes[3].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'
        
            })
            dois_a_cinco_top[13].addEventListener('click',function(event){
                testes[3].innerHTML=dois_a_cinco_top[13].innerHTML
                testes[3].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'
        
            })
            dois_a_cinco_top[14].addEventListener('click',function(event){
                testes[3].innerHTML=dois_a_cinco_top[14].innerHTML
                testes[3].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'
        
            })
            dois_a_cinco_top[15].addEventListener('click',function(event){
                testes[3].innerHTML=dois_a_cinco_top[15].innerHTML
                testes[3].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'

        
            })
            sexto_top[3].addEventListener('click',function(event){
                testes[3].innerHTML=sexto_top[3].innerHTML
                testes[3].style.color='#000000'
                localStorage.setItem('tamanho',testes[3])
                localStorage['tamanho']=testes[3].innerHTML
                a=lista[3].style.display='none'

        
            })
        cancelar=document.querySelectorAll('.img4')
        cancelar[1].addEventListener('click',function(event){
            localStorage["preco"]='Teste'
            localStorage["tamanho"]='Teste'
            localStorage["bairro"]='Teste'
            localStorage['rd']='Teste'
        })
            

    }
    if (document.querySelector('.bairro') !=null){

        aluguel=document.querySelectorAll('.aluguel')
        bairros=document.querySelectorAll('.bairro')
        areas=document.querySelectorAll('.area')
        img=document.querySelectorAll('.img0')
        filtro=document.querySelector('.imgfil')
        
        p1=false
        p2=false
        p3=false



        if(localStorage["bairro"]!='Teste'){
            p1=true

            for(i of bairros){

                i.innerHTML='Bairro:'+' ' + localStorage['bairro']
            }
        }
        
        if(localStorage["preco"]!='Teste'){
            
            p3=true
            precos=localStorage['preco'].split('-')
            valor=parseInt(precos[0])
  
            c=10
            for(i of aluguel){
                valor+=c
                i.innerHTML='Aluguel:R$'+valor.toString()+',00'
      
                c+=43
                
            }
            

        }
        if(localStorage["tamanho"]!='Teste'){
            p2=true
            tamanhos=localStorage['tamanho'].split('-')
            valor=parseInt(tamanhos[0])
  
            c=0
            for(i of areas){
                valor+=c
                if(valor==0){
                    i.innerHTML='Área:'+'29'+'m^2'

                }
                if(valor==3){
                    i.innerHTML='Área:'+'27'+'m^2'

                }
                if(valor==9){
                    i.innerHTML='Área:'+'24'+'m^2'

                }

                if(valor!=9&valor!=3&valor!=0){
                    i.innerHTML='Área:'+valor.toString()+' '+'m^2'
                }
                c+=3
                
            }

        }
        slot=0
        console.log(localStorage['entrou'])
        if(p1||p2||p3){
            if(localStorage['entrou']==0){
                console.log('vamos')
                slot=0
                localStorage['entrou']=1
                img[0].src='https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[1].src='https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg'
                img[2].src='https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[3].src='https://images.pexels.com/photos/276666/pexels-photo-276666.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[4].src='https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1600'
            }
            else if(img[0].src=="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg"){
                img[0].src='https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                console.log(2343)
                localStorage['entrou']=0
                img[1].src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[2].src='https://images.pexels.com/photos/11593507/pexels-photo-11593507.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[3].src='https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600'
                img[4].src='https://images.pexels.com/photos/8089185/pexels-photo-8089185.jpeg?auto=compress&cs=tinysrgb&w=1600'
                
            }
        

            console.log(slot)
            console.log(img[1].src)

        }
        filtro.addEventListener('click',function(event){
            localStorage["preco2"]=localStorage["preco"]
            localStorage["preco3"]=0
            localStorage["tamanho2"]=localStorage["tamanho"]
            localStorage["tamanho3"]=0
            localStorage["bairro2"]=localStorage['bairro']
            
            localStorage['rd2']=localStorage['rd']
            localStorage['rd3']=0
            localStorage["bairro3"]=0

        })
       
    }





})