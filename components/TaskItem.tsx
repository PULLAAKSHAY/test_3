
import React from 'react';
import { Task } from '../types';
import { CheckIcon, CrossIcon } from './Icons';

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li className="group flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors duration-200">
      <div className="flex items-center flex-grow">
        <button
          onClick={() => onToggleTask(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            task.completed
              ? 'border-sky-500 bg-gradient-to-br from-sky-400 to-cyan-400'
              : 'border-slate-500 hover:border-sky-400'
          }`}
        >
          {task.completed && <CheckIcon />}
        </button>
        <span
          className={`ml-4 text-lg cursor-pointer flex-grow ${
            task.completed
              ? 'text-slate-500 line-through'
              : 'text-gray-200'
          }`}
          onClick={() => onToggleTask(task.id)}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="ml-4 opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 transition-opacity duration-300"
        aria-label="Delete task"
      >
        <CrossIcon />
      </button>
    </li>
  );
};

export default TaskItem;
