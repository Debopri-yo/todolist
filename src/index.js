import './styles/style.css';
import { createProjectItem } from './dom.js';
import { createProject } from './project.js';
import { createTodo } from './todo.js';
import { createTodoItem } from './dom.js';
import { renderTodos } from './dom.js';
let projects = [];
const newProject = document.getElementById('new-project');
newProject.addEventListener('click', () => {
    const container = document.querySelector('#projects-container');
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    const project = createProject("Grocery shopping", "Weekly grocery shopping");
    const projectElement = createProjectItem(project);
    projects.push(project);
    container.appendChild(projectElement);
});
export function deleteProject(id) {
  projects.splice(id, 1);
}
const container = document.querySelector('#projects-container');
const project = createProject("Watch movie", "Watch a new movie this weekend");
const projectElement = createProjectItem(project);
const todo= createTodo("The Social Network", "Watch The Social Network", "2024-10-10", "High");
project.addTodo(todo);
projects.push(project);
container.appendChild(projectElement);
const todoContainer = document.querySelector('#tasks-container');
renderTodos(project, todoContainer);  
project.toggleSelected();