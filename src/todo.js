export function createTodo(title, description, dueDate, priority){
    let completed = false;
    const toggleCompleted = () => {
        completed = !completed;
    }
    const todoId=crypto.randomUUID();
return {title, description, dueDate, priority, completed, toggleCompleted,todoId};
}