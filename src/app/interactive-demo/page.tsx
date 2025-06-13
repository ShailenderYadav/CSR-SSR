import InteractiveDemo from '@/components/InteractiveDemo';

// This page uses SSR by default
export default function InteractiveDemoPage() {
  const serverTime = new Date().toISOString();
  const initialCount = Math.floor(Math.random() * 100); // Random initial count

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Elements in SSR/SSG</h1>
      
      <div className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Understanding Interactivity in SSR/SSG</h2>
        <div className="bg-white p-4 rounded shadow mb-4">
          <p className="mb-4">
            Many developers think that SSR and SSG pages can't be interactive, but that's not true!
            You can have fully interactive components in both SSR and SSG pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">Server-Side Part:</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Initial HTML is generated on the server</li>
                <li>Initial state is set on the server</li>
                <li>SEO-friendly content is included</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">Client-Side Part:</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Interactive elements work after hydration</li>
                <li>State updates happen in the browser</li>
                <li>User interactions are handled client-side</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SSR Demo */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Server-Side Rendering (SSR) Demo</h2>
        <InteractiveDemo
          initialCount={initialCount}
          serverTime={serverTime}
          renderType="SSR"
        />
      </div>

      {/* SSG Demo */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Static Site Generation (SSG) Demo</h2>
        <InteractiveDemo
          initialCount={initialCount}
          serverTime={serverTime}
          renderType="SSG"
        />
      </div>

      {/* Key Points */}
      <div className="p-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Points About Interactivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">What Works the Same:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All client-side interactivity (buttons, forms, etc.)</li>
              <li>State management and updates</li>
              <li>Event handlers and user interactions</li>
              <li>Client-side routing</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">What's Different:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Initial content is pre-rendered</li>
              <li>First load is faster and SEO-friendly</li>
              <li>JavaScript still needs to hydrate the page</li>
              <li>Initial state comes from the server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 