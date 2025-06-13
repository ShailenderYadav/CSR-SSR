import { Post } from '@/types/post';
import PostsDataTable from '@/components/DataTable';
import InteractiveButton from '@/components/InteractiveButton';
import Link from 'next/link';

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 } // Revalidate every hour
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

export default async function SSRPage() {
  const posts = await getPosts();
  const serverTime = new Date().toISOString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server-Side Rendering (SSR)</h1>
      
      {/* Server Info Section */}
      <div className="bg-green-100 p-4 rounded-lg mb-6">
        <p className="mb-2">This page is server-side rendered with data fetching.</p>
        <p className="font-semibold">Server Time: {serverTime}</p>
        <p className="text-sm text-green-700 mt-2">
          Notice how the data is immediately available - no loading state needed!
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.slice(0, 6).map((post) => (
          <Link
            key={post.id}
            href={`/ssr/posts/${post.id}`}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Interactive Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Interactive Elements in SSR</h2>
        <p className="mb-4">
          Even though this page is server-rendered, we can still have interactive elements!
          Try the button below:
        </p>
        <InteractiveButton />
      </div>

      {/* Full Data Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">All Posts</h2>
        <p className="text-sm text-gray-600 mb-4">
          This table shows all posts with client-side interactivity (sorting, pagination)
        </p>
        <PostsDataTable data={posts} />
      </div>
    </div>
  );
} 