document.addEventListener('DOMContentLoaded', function() {
    editars = document.querySelectorAll('.editarpp')
    popUp = document.querySelector('.pop-up')
    adicionar = document.querySelector('.add')
    input = document.querySelector('.input')
    function changePosition(t){
        id =  t.getAttribute('id')
        if (id == 'acad'){
            popUp.setAttribute('id', 'academico')  
        }
        else if (id == 'hor'){
            popUp.setAttribute('id', 'horario')  
        }
        else if (id == 'dep'){
            popUp.setAttribute('id', 'depoimento')  
        }
    }
    
    function openPopUp() {
        popUp.style.display = "block";
    }

    function closePopUp() {
        popUp.style.display = "none";
    }

    for (editar of editars) {
        editar.addEventListener('click', function(event) {
            t = event.currentTarget
            changePosition(t)
            openPopUp()
            adicionar.addEventListener('click', function(event) {
                localStorage.setItem("Evento",input.value)
                texto = localStorage.getItem("Evento")
                closePopUp()
                input.value = '';
                if (texto != ''){
                    txtacad = document.querySelector('#txtacad')
                    txthor = document.querySelector('#txthor')
                    txtdep = document.querySelector('#txtdep')
                    li = document.createElement('li')
                    li.innerHTML = '-'
                    li.innerHTML += texto
                    if (id == 'acad'){
                        txtacad.appendChild(li)
                    }
                    else if (id == 'hor'){
                        txthor.appendChild(li)
                    }
                    else if (id == 'dep'){
                        txtdep.appendChild(li) 
                    }
                }
            })

        })
    
    }

})