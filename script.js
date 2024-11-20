function addbtn() {
    const todo = document.getElementById("inputext").value;

    // Create a new <li> element
    const li = document.createElement("li");
    li.textContent = todo; // Set the text of the <li> to the entered todo

    // Append the new todo item to the todo list
    const todoList = document.getElementById("todolist");
    todoList.appendChild(li);

   document.getElementById("inputext").value=""
}
