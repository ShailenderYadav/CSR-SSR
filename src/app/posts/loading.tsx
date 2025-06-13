export default function Loading() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 