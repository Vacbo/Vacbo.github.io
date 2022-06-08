document.addEventListener('DOMContentLoaded', function() {
    editars = document.querySelectorAll('.editar')
    popUp = document.querySelector('.pop-up')
    adicionar = document.querySelector('.add')
    input = document.querySelector('.input')
    function changePosition(t){
       id =  t.getAttribute('id')
       if (id == 'seg'){
            popUp.setAttribute('id', 'segunda')  
       }
       else if (id == 'ter'){
            popUp.setAttribute('id', 'terca')  
       }
       else if (id == 'qua'){
            popUp.setAttribute('id', 'quarta')  
       }
       else if (id == 'qui'){
            popUp.setAttribute('id', 'quinta')  
       }
       else if (id == 'sex'){
           popUp.setAttribute('id','sexta')
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
                closePopUp()
            })

        })
    
    }






})