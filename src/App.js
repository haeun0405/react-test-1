import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder=""
          />
          <button onClick={addTodo}>추가하기</button>
        </div>
        <section>
          <h2 style={{ textAlign: 'center' }}>Todo List</h2>
          <div className="todo-grid">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                {todo}
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;