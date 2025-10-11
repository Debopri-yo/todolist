import { delproject } from "./project";

export function createTodoItem(todo){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    const title = document.createElement('h3');
    title.textContent = todo.title;
    const description = document.createElement('p');
    description.textContent = todo.description;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${todo.dueDate}`;
    let removeButton = document.createElement('button');
    removeButton.id = 'del-todo'
    removeButton.textContent="Delete Task";    
    todoDiv.appendChild(removeButton);
    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(dueDate);
    return todoDiv;
}
export function createProjectItem(project){
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    const title = document.createElement('h3');
    title.textContent = project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    let removeButton = document.createElement('button');
    removeButton.id = 'del-project'
    removeButton.textContent="Delete Project";
    removeButton.addEventListener('click', () => {
        delproject(project);
    });
    projectDiv.appendChild(removeButton);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    let addTodo = document.createElement('button');
    addTodo.id = 'add-todo'
    addTodo.textContent="Add Task";    
    projectDiv.appendChild(addTodo);
    return projectDiv;
}
export function renderProjects(projects){
    const container = document.querySelector('#projects-container');
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    projects.forEach((project) => {
    const div = document.createElement('div');
    div.textContent = project.name;
    container.appendChild(div);
    });
}
