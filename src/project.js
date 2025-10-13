export function createProject(title, description) {
    const todos = [];
    const addTodo = (todo) => {
        todos.push(todo);
    };
    const deleteTodo = (todo) => {
        todos.splice(todo,1);
    }
    const id=crypto.randomUUID();
    return { title, description, todos ,addTodo,id,deleteTodo};
};