import { Post } from '@/types/post';
import PostsDataTable from '@/components/DataTable';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  return res.json();
}

// Generate static params to ensure the page is built at build time
export const dynamic = 'force-static';

export default async function SSGPage() {
  const posts = await getPosts();
  // Get the build time - this will be the same for all users until revalidation
  const buildTime = new Date().toISOString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Static Site Generation (SSG)</h1>
      <div className="bg-green-100 p-4 rounded-lg mb-4">
        <p className="mb-2">This page is pre-rendered at build time and revalidated every hour.</p>
        <p className="font-semibold">Page built at: {buildTime}</p>
        <p className="text-sm text-green-700 mt-2">
          Notice how the timestamp stays the same on refresh - this shows that the page is being served from cache!
        </p>
      </div>
      <PostsDataTable data={posts} />
    </div>
  );
} 