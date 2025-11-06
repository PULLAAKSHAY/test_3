
import React from 'react';
import { FilterType } from '../types';

interface FilterControlsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeTasksCount: number;
  onClearCompleted: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  activeFilter,
  onFilterChange,
  activeTasksCount,
  onClearCompleted,
}) => {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex items-center justify-between text-slate-400 p-4 text-sm">
      <span>{activeTasksCount} items left</span>
      <div className="hidden sm:flex items-center space-x-4">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`font-bold transition-colors duration-300 ${
              activeFilter === value
                ? 'text-sky-400'
                : 'hover:text-sky-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={onClearCompleted}
        className="hover:text-sky-400 transition-colors duration-300"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterControls;
