import React, { useState, useEffect, useContext } from 'react';
import { getCetegories } from '@/services';
import Link from 'next/link';

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCetegories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              TechZoro
            </span>
          </Link>
        </div>

        <div className="hidden md:float md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/&{category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white cursor-pointer ml-4 font-semibold">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
