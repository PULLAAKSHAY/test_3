
import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAddTask(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex items-center bg-slate-700 rounded-lg overflow-hidden">
        <span className="w-12 h-12 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-slate-500 rounded-full"></div>
        </span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Create a new task..."
          className="w-full bg-transparent text-lg text-gray-200 placeholder-slate-500 focus:outline-none py-4"
        />
         <button 
            type="submit"
            className="bg-sky-500 text-white font-bold px-6 h-12 hover:bg-sky-600 transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
            disabled={!text.trim()}
          >
           Add
         </button>
      </div>
    </form>
  );
};

export default TaskInput;
