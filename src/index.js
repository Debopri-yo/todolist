import './styles/style.css';
//import { createTodoItem } from './dom.js';
//import { createTodo } from './todo.js';
import { createProjectItem } from './dom.js';
import { createProject } from './project.js';
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