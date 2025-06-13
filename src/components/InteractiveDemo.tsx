'use client';

import { useState } from 'react';

interface InteractiveDemoProps {
  initialCount: number;
  serverTime: string;
  renderType: 'SSR' | 'SSG';
}

export default function InteractiveDemo({ initialCount, serverTime, renderType }: InteractiveDemoProps) {
  const [count, setCount] = useState(initialCount);
  const [clientTime, setClientTime] = useState(new Date().toISOString());
  const [isExpanded, setIsExpanded] = useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
    setClientTime(new Date().toISOString());
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Interactive Demo ({renderType})</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="space-y-4">
        {/* Server-side content */}
        <div className="p-3 bg-blue-50 rounded">
          <p className="font-semibold">Server Time: {serverTime}</p>
          <p className="text-sm text-gray-600">This was generated on the server and won't change on refresh</p>
        </div>

        {/* Client-side interactivity */}
        <div className="p-3 bg-green-50 rounded">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={increment}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment Counter
            </button>
            <span className="text-xl font-bold">Count: {count}</span>
          </div>
          <p className="text-sm">Last Update: {clientTime}</p>
          <p className="text-sm text-gray-600">This updates instantly on the client side</p>
        </div>

        {/* Expandable content */}
        {isExpanded && (
          <div className="p-3 bg-purple-50 rounded">
            <h4 className="font-semibold mb-2">How This Works:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Initial count ({initialCount}) was set on the server</li>
              <li>Server time was generated during {renderType}</li>
              <li>Counter updates happen entirely on the client</li>
              <li>Toggle button state is managed client-side</li>
              <li>All interactivity works the same in both {renderType} and CSR</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 