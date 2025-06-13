import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Rendering Strategies Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">React (CSR)</h2>
          <p className="mb-4">
            Traditional React client-side rendering:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Data fetched in browser</li>
            <li>Shows loading state</li>
            <li>Slower initial load</li>
            <li>Good for dynamic apps</li>
          </ul>
          <Link 
            href="/csr" 
            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            View React Demo
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Next.js (SSR)</h2>
          <p className="mb-4">
            Server-Side Rendering with Next.js:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Data fetched on server</li>
            <li>No loading state</li>
            <li>Faster initial load</li>
            <li>Better for SEO</li>
          </ul>
          <Link 
            href="/ssr" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View SSR Demo
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Next.js (SSG)</h2>
          <p className="mb-4">
            Static Site Generation with Next.js:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Pre-rendered at build</li>
            <li>Fastest performance</li>
            <li>Best for static content</li>
            <li>Excellent SEO</li>
          </ul>
          <Link 
            href="/ssg" 
            className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
          >
            View SSG Demo
          </Link>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Differences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold text-yellow-700">React (CSR)</h3>
            <ul className="list-disc pl-6">
              <li>Initial HTML is empty</li>
              <li>JavaScript loads first</li>
              <li>Data fetching in browser</li>
              <li>Shows loading spinner</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-700">Next.js (SSR)</h3>
            <ul className="list-disc pl-6">
              <li>HTML ready on server</li>
              <li>Data fetched on server</li>
              <li>No loading spinner</li>
              <li>Faster Time to First Byte</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-700">Next.js (SSG)</h3>
            <ul className="list-disc pl-6">
              <li>HTML pre-generated</li>
              <li>No server processing</li>
              <li>Instant page load</li>
              <li>Best performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
