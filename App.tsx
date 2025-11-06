
import React, { useState, useEffect, useMemo } from 'react';
import { Task, FilterType } from './types';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterControls from './components/FilterControls';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem('zenith-tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('zenith-tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage", error);
    }
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const activeTasksCount = useMemo(() => tasks.filter(task => !task.completed).length, [tasks]);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
            <FilterControls
              activeFilter={filter}
              onFilterChange={setFilter}
              activeTasksCount={activeTasksCount}
              onClearCompleted={clearCompleted}
            />
          </div>
        </main>
        <footer className="text-center text-sm text-slate-500 mt-10">
          <p>Drag and drop to reorder list (coming soon!)</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
