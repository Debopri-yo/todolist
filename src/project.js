export function createProject(title, description) {
    const todos = [];
    const addTodo = (todo) => {
        todos.push(todo);
    };
    return { title, description, todos ,addTodo};
}
export function renderProjects(projects, deleteProject) {
  const container = document.querySelector('#projects-container');
  container.innerHTML = '';

  projects.forEach((project, index) => {
    const div = document.createElement('div');
    div.textContent = project.name;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => deleteProject(index));

    div.appendChild(delBtn);
    container.appendChild(div);
  });
}