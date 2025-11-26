import { deleteProject } from "./index.js";
import { createTodo } from "./todo.js";
import { addProject } from "./index.js";
import { createProject } from "./project.js";
import { format } from 'date-fns';
import { tr } from "date-fns/locale";
export function createTodoItem(todo){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    const title = document.createElement('h3');
    title.textContent = todo.title;
    const description = document.createElement('p');
    description.textContent = todo.description;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${format(new Date(todo.dueDate), 'MMM dd, yyyy')}`; 
    if(todo.priority==="High"){ 
        todoDiv.classList.add('priority-high');
    } else if (todo.priority==="Mid"){
        todoDiv.classList.add('priority-mid');
    } else {
        todoDiv.classList.add('priority-low');
    }
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
    showTodoForm(project);
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
    if(todos.length===0){
        const noTaskMsg = document.createElement('p');
        noTaskMsg.textContent = "No tasks available. Please add a task.";
        container.appendChild(noTaskMsg);
        return;
    }
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
            todoElement.classList.toggle('completed');
        });
    container.appendChild(removeTodo);
    container.appendChild(toggleCompleted);
    });
}
let projectFormInitialized=false;
export function showProjectForm(){
    const dialogElem = document.getElementById("project-dialog");
    const form = document.getElementById("project-form");
    if(!projectFormInitialized){
    form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const title=document.getElementById("project-name").value;
    const desc=document.getElementById("project-desc").value;
    form.reset();
    dialogElem.close();
    addProject(createProject(title,desc));
    });
        projectFormInitialized=true;
    }
    dialogElem.showModal();
}
let todoFormInitialized=false;
export function showTodoForm(project){
    const dialogElem = document.getElementById("todo-dialog");
    const form = document.getElementById("todo-form");
    if(!todoFormInitialized){
    form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const title=document.getElementById("todo-name").value;
    const desc=document.getElementById("todo-desc").value;
    let priority;
    const priorityElements = document.getElementsByName("priority");
    for (const elem of priorityElements) {
        if (elem.checked) {
            priority = elem.value;
            break;
        }
    }
    let dueDate=document.getElementById("todo-duedate").value;
    form.reset();
    dialogElem.close();
    project.addTodo(createTodo(title,desc,dueDate,priority));
    renderTodos(project, document.querySelector('#tasks-container'));
    });
    todoFormInitialized=true;
    }
    dialogElem.showModal();
}
