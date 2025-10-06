function createTodo(title, description, dueDate, priority){
    let completed = false;
    const toggleCompleted = () => {
        completed = !completed;
    }
return {title, description, dueDate, priority, completed, toggleCompleted};
}
export {createTodo};