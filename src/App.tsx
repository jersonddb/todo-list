import { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, text: newTask }]);
    setNewTask('');
  };

  const removeTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Lista de Tareas</h1>
      <div className='mb-4'>
        <input 
          type='text' 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          className='border p-2 mr-2'
        />
        <button 
          onClick={addTask} 
          className='bg-blue-500 text-white px-4 py-2'
        >
          Añadir
        </button>
      </div>
      <ul className='list-disc list-inside'>
        {tasks.map(task => (
          <li 
            key={task.id} 
            className='mb-2 flex justify-between items-center'
          >
            <span>{task.text}</span>
            <button 
              onClick={() => removeTask(task.id)} 
              className='bg-red-500 text-white px-4 py-2'
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


