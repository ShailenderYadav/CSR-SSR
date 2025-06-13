import { Post } from '@/types/post';
import PostsDataTable from '@/components/DataTable';
import ClientSideCounter from '@/components/ClientSideCounter';

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function ComparisonPage() {
  const posts = await getPosts();
  const serverTime = new Date().toISOString();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Interactive CSR vs SSR Comparison</h1>
      
      {/* Interactive Comparison Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* SSR Side */}
        <div className="p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Server-Side Rendering (SSR)</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Server-Generated Content</h3>
              <div className="space-y-2">
                <p className="font-semibold">Server Time: {serverTime}</p>
                <p className="text-sm text-gray-600">Try refreshing the page - this time won't change!</p>
                <div className="mt-4 p-3 bg-gray-100 rounded">
                  <p className="text-sm">This content is generated on the server and sent as HTML.</p>
                  <p className="text-sm mt-2">Notice how it's immediately visible when the page loads.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Server-Side Data Fetching</h3>
              <div className="space-y-2">
                <p className="text-sm">Posts loaded on server: {posts.length}</p>
                <p className="text-sm text-gray-600">Data is fetched during page build/request</p>
                <div className="mt-2 p-2 bg-gray-100 rounded">
                  <p className="text-sm font-semibold">First Post Title:</p>
                  <p className="text-sm">{posts[0]?.title || 'Loading...'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSR Side */}
        <div className="p-6 bg-green-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client-Side Rendering (CSR)</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Client-Side Interactivity</h3>
              <ClientSideCounter />
              <div className="mt-4 p-3 bg-gray-100 rounded">
                <p className="text-sm">This counter updates instantly without server requests.</p>
                <p className="text-sm mt-2">Try clicking multiple times - notice the immediate response!</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Client-Side State</h3>
              <div className="space-y-2">
                <p className="text-sm">Try these actions:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Click the counter above</li>
                  <li>Notice how the time updates instantly</li>
                  <li>No page refresh needed</li>
                </ul>
                <div className="mt-2 p-2 bg-gray-100 rounded">
                  <p className="text-sm">All updates happen in the browser without server communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences Section */}
      <div className="mb-8 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Differences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">SSR Characteristics</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Content is ready when page loads</li>
              <li>Better for SEO</li>
              <li>Works without JavaScript</li>
              <li>Initial load might be slower</li>
              <li>Server does the heavy lifting</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">CSR Characteristics</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Content loads after JavaScript runs</li>
              <li>Better for interactivity</li>
              <li>Requires JavaScript</li>
              <li>Subsequent interactions are faster</li>
              <li>Browser does the heavy lifting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hybrid Example */}
      <div className="p-6 bg-yellow-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Hybrid Approach Example</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Data Table: SSR + CSR</h3>
          <p className="mb-4 text-sm">This table combines both approaches:</p>
          <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
            <li>Initial data is server-rendered (SSR)</li>
            <li>Sorting and pagination are client-side (CSR)</li>
            <li>Try sorting columns to see CSR in action</li>
            <li>Notice how the initial load is fast (SSR)</li>
          </ul>
          <PostsDataTable data={posts} />
        </div>
      </div>
    </div>
  );
} 