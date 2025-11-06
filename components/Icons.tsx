
import React from 'react';

export const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
  </svg>
);

export const CrossIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.97 0l.708.707L9.707 8.678l7.97 7.97-.707.707-7.97-7.97-7.97 7.97-.707-.707L8.293 8.678.323.707.707 0 8.678 7.97 16.971 0z"
    />
  </svg>
);

export const EmptyListIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <path d="M9 14l2 2l4 -4" />
  </svg>
);
