document.addEventListener('DOMContentLoaded',function(){
    pacientes = document.querySelectorAll('.pacientes')
    for (paciente of pacientes) {
        paciente.addEventListener('click',function(event){
            t = event.currentTarget
            console.log( t.querySelector('a'))
            nome = t.querySelector('a').innerHTML
            localStorage.setItem('nome',nome)
        })
    }
})