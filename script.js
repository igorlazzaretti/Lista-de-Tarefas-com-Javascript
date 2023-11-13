const tarefa = document.querySelector('#tarefa')
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")

btn.addEventListener("click", function(){
    if (tarefa.value == ""){
        alert("Digite uma tarefa válida né!")
    }  else {
        lista.innerHTML += `  <li> 
        <i class="fas fa-check-circle check"></i>
        <span>${tarefa.value}</span>
        <i class="fa-solid fa-trash-can close"></i>
        </li>`
    }

})