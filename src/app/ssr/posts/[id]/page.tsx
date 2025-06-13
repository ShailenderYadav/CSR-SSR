import { Post } from '@/types/post';
import { notFound } from 'next/navigation';
import InteractiveButton from '@/components/InteractiveButton';
import Link from 'next/link';
import type { Metadata } from 'next';

async function getPost(id: string): Promise<Post> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.status}`);
    }

    return res.json();
  } catch {
    console.error('Error fetching post');
    throw new Error('Failed to fetch post');
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const post = await getPost(id);
    return {
      title: post.title,
      description: post.description.substring(0, 160),
    };
  } catch {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
}

export default async function PostDetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;
  let post: Post;
  const serverTime = new Date().toISOString();

  try {
    post = await getPost(id);
  } catch {
    notFound();
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.category}</h1>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600">
              This page is server-side rendered. The data was fetched at: {serverTime}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="prose max-w-none">
            <p className="text-lg mb-4">{post.title}</p>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">ID: {post.id}</p>
                <p className="text-sm text-gray-600">Description: {post.description}</p>
              </div>
              <Link
                href="/ssr"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Back to Posts
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Interactive Elements in SSR</h2>
          <p className="mb-4">
            Even though this page is server-rendered, we can still have interactive elements!
            Try the button below:
          </p>
          <InteractiveButton />
        </div>
      </div>
    </div>
  );
} 