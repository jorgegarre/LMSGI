const addBtn = document.getElementById("btn-task");
const lista = document.getElementById("lista");
const input = document.getElementById("task");

addBtn.addEventListener("click", addTask);

function addTask() {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = input.value;
    li.appendChild(p);
    lista.appendChild(li);
    
    input.value = "";
    
    }