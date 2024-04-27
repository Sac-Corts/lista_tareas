export const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  
  export const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    saveTodos([...loadTodos(), newTodo]);
    return newTodo;
  };
  
  export const toggleTodo = (todos, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
    return updatedTodos;
  };
  
  export const deleteTodo = (todos, id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
    return updatedTodos;
  };
  
  const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };