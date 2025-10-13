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
    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(dueDate);
    return todoDiv;
};
export function createProjectItem(project){
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    const title = document.createElement('h3');
    title.textContent = project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    const id=project.id;
    let removeButton = document.createElement('button');
    removeButton.id = 'del-project'
    removeButton.textContent="Delete Project";
    removeButton.addEventListener('click', () => {
        deleteProject(id);
        projectDiv.remove();
    });
    projectDiv.appendChild(removeButton);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    let addTodo = document.createElement('button');
    addTodo.id = 'add-todo'
    addTodo.textContent="Add Task";
    addTodo.addEventListener('click', () => {
    const newTodo=createTodo("title", "description", "dueDate", "priority")
    project.addTodo(newTodo);
    const todoElement = createTodoItem(newTodo);
    let removeTodo = document.createElement('button');
    removeTodo.id = 'del-todo'
    removeTodo.textContent="Delete Task";
    removeTodo.addEventListener('click', () => {
        project.deleteTodo(newTodo);
        todoElement.remove();
        removeTodo.remove();
    });  
    projectDiv.appendChild(todoElement);
    projectDiv.appendChild(removeTodo);
    });   
    projectDiv.appendChild(addTodo);
    return projectDiv;
};
