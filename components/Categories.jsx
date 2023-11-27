import React, { useState, useEffect } from 'react';
import { getCetegories } from '@/services';
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCetegories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>

      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
