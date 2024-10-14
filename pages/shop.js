import React from 'react';
import ProductCard from '/components/product-card';  // Adjust the path as needed


const shop = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Title with large font size */}
      <h1 className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
      </h1>
      
      {/* Centering Product Cards */}
 <div className="flex justify-center flex-wrap gap-4 pt-8">  {/* Added mt-8 */}
  <ProductCard
    productName="Polenia 6 Pack"
    description="High-quality wireless headphones with noise cancellation and superior sound."
    price="$299.99"
    imageUrl=""
  />
  <ProductCard
    productName="Polenia 24 pack"
    description="A stylish smartwatch with health tracking features."
    price="$199.99"
    imageUrl=""
  />
  <ProductCard
    productName="Polenia 12 pack"
    description="Portable Bluetooth speaker with excellent sound quality."
    price="$149.99"
    imageUrl=""
  />
</div>

    </div>
  );
};

export default shop;
