import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import { loadTodos, addTodo, toggleTodo, deleteTodo } from '../utils/todoUtils';


const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = loadTodos();
    setTodos(storedTodos);
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = addTodo(newTodo);
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = toggleTodo(todos, id);
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = deleteTodo(todos, id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button onClick={handleAddTodo}>Agregar</button>
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default Home;