document.addEventListener('DOMContentLoaded',function(){
    nome=document.querySelector('header')
    pop = document.querySelector('.calendario')
    pop.innerHTML = 'Consultas com ' + localStorage.getItem('nome')
    h1=nome.querySelector('h1')
    h1.innerHTML = localStorage.getItem('nome')
    
        
    })