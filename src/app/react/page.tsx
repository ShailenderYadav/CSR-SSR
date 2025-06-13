'use client';

import { useState, useEffect } from 'react';
import { Post } from '@/types/post';
import PostsDataTable from '@/components/DataTable';

export default function ReactPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setCurrentTime(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">React Client-Side Rendering</h1>
      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
        <p className="mb-2">This page uses React's client-side rendering.</p>
        <p className="font-semibold">Data fetched at: {currentTime}</p>
        <p className="text-sm text-yellow-700 mt-2">
          Notice how the page first shows a loading state, then fetches data in the browser!
        </p>
      </div>
      {loading ? (
        <div className="text-center p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading data...</p>
        </div>
      ) : (
        <PostsDataTable data={posts} />
      )}
    </div>
  );
} 