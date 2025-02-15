
const addButton = document.getElementById('add-task-btn')
const inputField = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')


function addTask(){
   
   const taskText = inputField.value.trim()
    if(taskText ==="") return

    const li = document.createElement('li')
    li.textContent = taskText

    const removeButton = document.createElement('button')
    removeButton.textContent = "X"
    removeButton.onclick = function(){
        li.remove()
    }
    li.appendChild(removeButton)
    todoList.appendChild(li)
    inputField.value = ""
}

addButton.addEventListener('click',addTask)
inputField.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
        addTask()
    }
})