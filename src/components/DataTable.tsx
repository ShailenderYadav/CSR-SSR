'use client';

import DataTable from 'react-data-table-component';
import { useState, useMemo } from 'react';
import { Post } from '@/types/post';

const columns = [
  {
    name: 'ID',
    selector: (row: Post) => row.id,
    sortable: true,
  },
  {
    name: 'Title',
    selector: (row: Post) => row.title,
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row: Post) => row.price,
    sortable: true,
    format: (row: Post) => `$${row.price.toFixed(2)}`,
  },
  {
    name: 'Category',
    selector: (row: Post) => row.category,
    sortable: true,
  },
  {
    name: 'Image',
    selector: (row: Post) => row.image,
    cell: (row: Post) => (
      <img
        src={row.image}
        alt={row.title}
        className="w-16 h-16 object-contain"
      />
    ),
  },
];

interface DataTableProps {
  data: Post[];
}

export default function ProductsDataTable({ data }: DataTableProps) {
  const [filterText, setFilterText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(data.map(item => item.category));
    return Array.from(uniqueCategories);
  }, [data]);

  // Filter data
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesText = item.title.toLowerCase().includes(filterText.toLowerCase()) ||
                         item.description.toLowerCase().includes(filterText.toLowerCase());
      const matchesCategory = categoryFilter === '' || item.category === categoryFilter;
      return matchesText && matchesCategory;
    });
  }, [data, filterText, categoryFilter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by title or description..."
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full md:w-48">
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 50]}
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
} 