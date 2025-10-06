function createTodoItem(todo){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    const title = document.createElement('h3');
    title.textContent = todo.title;
    const description = document.createElement('p');
    description.textContent = todo.description;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${todo.dueDate}`;
    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(dueDate);
    return todoDiv;
}
export {createTodoItem};



function renderTodoItem(li) {
    const todoList = document.getElementById('todo-list');
    if (!todoList) {
        const newTodoList = document.createElement('ul');
        newTodoList.id = 'todo-list';
        document.body.appendChild(newTodoList);
        newTodoList.appendChild(item);
    } else {
        todoList.appendChild(item);
    }
}
export { renderTodoItem };