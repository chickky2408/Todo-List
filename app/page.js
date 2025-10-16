'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  // โหลดข้อมูลจาก localStorage เมื่อเริ่มต้น
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);


  // บันทึกข้อมูลลง localStorage ทุกครั้งที่ todos เปลี่ยน
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  // บันทึก dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);


  // เพิ่มงานใหม่
  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };


  // ลบงาน
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  // สลับสถานะงาน
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };


  // กรองรายการตาม filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.completed;
    if (filter === 'notDone') return !todo.completed;
    return true;
  });


  // จัดการ Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            👨🏻‍💻 Todo List
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-lg transition-all ${
              darkMode 
                ? 'bg-yellow-400 hover:bg-yellow-300 text-gray-900' 
                : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Input Section */}

        <div className={`p-6 rounded-xl shadow-lg mb-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="add new task..."
              className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-200 text-gray-800'
              }`}
            />
            <button
              onClick={addTodo}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              ADD
            </button>
          </div>
        </div>


        {/* Filter Buttons */}

        <div className="flex gap-2 mb-6">
          {[
            { value: 'all', label: 'All' },
            { value: 'notDone', label: 'Not Done' },
            { value: 'done', label: 'Done' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === value
                  ? 'bg-indigo-600 text-white shadow-md'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>


        {/* Stats */}

        <div className={`p-4 rounded-lg mb-6 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
          <div className="flex justify-around text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600">{todos.length}</div>
              <div className="text-sm opacity-75">All</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {todos.filter(t => t.completed).length}
              </div>
              <div className="text-sm opacity-75">Done</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {todos.filter(t => !t.completed).length}
              </div>
              <div className="text-sm opacity-75">Not Done</div>
            </div>
          </div>
        </div>

        {/* Todo List */}

        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className={`text-center py-12 rounded-xl ${
              darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
            }`}>
              <p className="text-xl">
                {filter === 'done' && '🎉 ยังไม่มีงานที่เสร็จ'}
                {filter === 'notDone' && '✨ ไม่มีงานค้างอยู่'}
                {filter === 'all' && '📋 ยังไม่มีรายการงาน'}
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div
                key={todo.id}
                className={`p-4 rounded-xl shadow-md transition-all transform hover:scale-[1.02] ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } ${todo.completed ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="mt-1 w-5 h-5 rounded cursor-pointer accent-indigo-600"
                  />
                  <div className="flex-1 cursor-pointer" onClick={() => toggleComplete(todo.id)}>
                    <p className={`text-lg ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    } ${todo.completed ? 'line-through' : ''}`}>
                      {todo.text}
                    </p>
                    <p className={`text-sm mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      📅 {todo.createdAt}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}