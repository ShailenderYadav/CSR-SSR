import { Post } from '@/types/post';
import Link from 'next/link';

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
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

export default async function PostsPage() {
  const posts = await getPosts();
  const serverTime = new Date().toISOString();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Posts</h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600">
              This page is server-side rendered. The data was fetched at: {serverTime}
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.body}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 