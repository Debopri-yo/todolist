import './styles/style.css';
import { createTodoItem } from './dom.js';
import { createTodo } from './todo.js';
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const todoList = document.createElement('ul');
    todoList.id = 'todo-list';
    const todo = createTodo("Buy milk", "2L of milk", "2025-10-07");
    const todoElement = createTodoItem(todo);
    const container = document.getElementById('todo-container');
    container.appendChild(todoElement);
})
