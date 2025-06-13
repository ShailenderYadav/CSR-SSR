'use client';

export default function InteractiveButton() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <button
        onClick={() => alert('This is an interactive button!')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Click Me!
      </button>
      <p className="mt-2 text-sm text-gray-600">
        This button works client-side, even though the page content was rendered on the server.
      </p>
    </div>
  );
} 