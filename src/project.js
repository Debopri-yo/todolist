export function createProject(title, description) {
    const todos = [];
    const addTodo = (todo) => {
        todos.push(todo);
    };
    const deleteTodo = (todo) => {
        todos.splice(todo,1);
    }
    const id=crypto.randomUUID();
    let selected=false;
    const toggleSelected=()=>{
        selected=!selected;
    }
    const getTodos = () => todos;
    return { title, description, todos ,addTodo,id,deleteTodo,selected,toggleSelected,getTodos};
};