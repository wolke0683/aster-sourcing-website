// src/pages/Products.tsx

import ProductCategories from '@/components/ProductCategories';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of product categories. We source high-quality products 
            from reliable manufacturers across various industries.
          </p>
        </div>
        <ProductCategories />
      </div>
    </div>
  );
};

export default Products;