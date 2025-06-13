export default function Loading() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 