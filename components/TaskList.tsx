
import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';
import { EmptyListIcon } from './Icons';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 px-4 border-t border-slate-700">
        <EmptyListIcon className="mx-auto h-20 w-20 text-slate-600" />
        <p className="mt-4 text-slate-400">Your task list is empty.</p>
        <p className="text-slate-500 text-sm">Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <ul className="border-t border-slate-700">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
