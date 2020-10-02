import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App: React.FC = () => {
  const todos = [
    { id: '1', text: 'First todo', completed: false },
    { id: '2', text: 'Second todo', completed: false },
  ];

  const [list, setList] = React.useState(todos);

  const handleAddTodo = (text: string) => {
    const enteredId = Math.random().toString();
    setList((prevState) => [...prevState, { id: enteredId, text: text, completed: false }]);
  };

  const handleEdit = (id: string, text: string) => {
    const newTaskText = window.prompt('Your task:', text)!;
    const update = (prevState: any) =>
      prevState.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            text: newTaskText,
          };
        }
        return item;
      });
    setList(update);
  };

  const handleSelect = (id: string) => {
    const update = (prevState: any) =>
      prevState.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    setList(update);
  };

  const handleDelete = (id: string) => {
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>TypeScript Todo App</h4>
      </div>
      <div className="todo__list">
        <AddTodo addTodo={handleAddTodo} />
        <TodoList
          selectTodo={handleSelect}
          editTodo={handleEdit}
          deleteTodo={handleDelete}
          todos={list}
        />
      </div>
    </div>
  );
};

export default App;
