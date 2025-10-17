import './styles/style.css';
import { createProjectItem } from './dom.js';
import { createProject } from './project.js';
import { createTodo } from './todo.js';
import { renderTodos } from './dom.js';
import { showProjectForm } from './dom.js';
let projects = [];
const newProject = document.getElementById('new-project');
newProject.addEventListener('click', () => {
    showProjectForm();
});
export function deleteProject(id) {
  projects.splice(id, 1);
}
export function addProject(project) {
  const container = document.querySelector('#projects-container');
  projects.push(project);
  const projectElement = createProjectItem(project);
  projectElement.addEventListener('click', () => {
      const todoContainer = document.querySelector('#tasks-container');
      renderTodos(project,todoContainer);
    })
    container.appendChild(projectElement);
}
const container = document.querySelector('#projects-container');
const project = createProject("Watch movie", "Watch a new movie this weekend");
const projectElement = createProjectItem(project);
const todo= createTodo("The Social Network", "Watch The Social Network", "2024-10-10", "Mid");
project.addTodo(todo);
projects.push(project);
container.appendChild(projectElement);
projectElement.addEventListener('click', () => {
      const todoContainer = document.querySelector('#tasks-container');
      renderTodos(project,todoContainer);
    })
const todoContainer = document.querySelector('#tasks-container');
renderTodos(project, todoContainer);