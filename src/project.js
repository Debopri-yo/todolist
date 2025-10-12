export function createProject(title, description) {
    const todos = [];
    const addTodo = (todo) => {
        todos.push(todo);
    };
    const id=crypto.randomUUID();
    return { title, description, todos ,addTodo,id};
};