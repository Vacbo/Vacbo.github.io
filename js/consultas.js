document.addEventListener('DOMContentLoaded',function(){
    nome=document.querySelector('header')
    h1=nome.querySelector('h1')
    h1.innerHTML = localStorage.getItem('nome')
    
        
    })