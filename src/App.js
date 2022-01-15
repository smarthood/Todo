import React from 'react';
import Form from './components/form';
import TodoList from './components/TodoList';
export default function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form />
      <TodoList />
    </div>
  );
}

