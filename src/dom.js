import { deleteProject } from "./index.js";
import { createTodo } from "./todo.js";
export function createTodoItem(todo){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    const title = document.createElement('h3');
    title.textContent = todo.title;
    const description = document.createElement('p');
    description.textContent = todo.description;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${todo.dueDate}`;  
    if(todo.priority==="High"){ 
        todoDiv.classList.add('priority-high');
    } else if (todo.priority==="Mid"){
        todoDiv.classList.add('priority-mid');
    } else {
        todoDiv.classList.add('priority-low');
    }
    console.log(todo.priority);
    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(dueDate);
    return todoDiv;
};
export function createProjectItem(project){
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-list';
    const title = document.createElement('h3');
    title.textContent = project.title;
    const id=project.id;
    projectDiv.appendChild(title);
    let addTodo = document.createElement('button');
    addTodo.id = 'add-todo'
    addTodo.textContent="Add Task";
    addTodo.addEventListener('click', () => {
    const newTodo=createTodo("title", "description", "dueDate", "High")
    project.addTodo(newTodo);
    renderTodos(project, document.querySelector('#tasks-container'));
    });   
    let removeButton = document.createElement('button');
    removeButton.id = 'del-project'
    removeButton.textContent="Delete Project";
    removeButton.addEventListener('click', () => {
        deleteProject(id);
        projectDiv.remove();
    });
    projectDiv.appendChild(removeButton);
    projectDiv.appendChild(addTodo);
    return projectDiv;
};
export function renderTodos(project, container) {
    container.innerHTML = '';
    const todos=project.getTodos();
    const projectTitle= document.getElementById('project-title');
    projectTitle.textContent=project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    container.appendChild(description);
    todos.forEach((todo) => {
        const todoElement = createTodoItem(todo);
        container.appendChild(todoElement);
        let removeTodo = document.createElement('button');
        removeTodo.id = 'del-todo'
        removeTodo.textContent="Delete Task";
        removeTodo.addEventListener('click', () => {
        project.deleteTodo(todo);
        todoElement.remove();
        removeTodo.remove();
        toggleCompleted.remove();
        });
        let toggleCompleted = document.createElement('button');
        toggleCompleted.textContent="Mark as Done";
        toggleCompleted.addEventListener('click',() => {
            todo.toggleCompleted();
        });
    container.appendChild(removeTodo);
    container.appendChild(toggleCompleted);
    });
}
