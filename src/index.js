document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
    toDoList (document.querySelector('#new-task-description').value)
    event.preventDefault()
  })
  
  function toDoList(toDo){
    let list = document.createElement("li")
    list.innerText = `${toDo}`
  document.querySelector('#tasks').appendChild(list)
  }
});


