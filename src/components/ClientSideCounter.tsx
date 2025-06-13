'use client';

import { useState } from 'react';

export default function ClientSideCounter() {
  const [count, setCount] = useState(0);
  const [clientTime, setClientTime] = useState(new Date().toISOString());

  const increment = () => {
    setCount(prev => prev + 1);
    setClientTime(new Date().toISOString());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment Counter
        </button>
        <span className="text-xl font-bold">Count: {count}</span>
      </div>
      <p>Last Update Time: {clientTime}</p>
    </div>
  );
} 