// pages/shop.js
import React, { useState, useEffect } from 'react';
import ProductCard from '/components/product-card'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../utils/firebase'; // Import the Firestore instance
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Initialize dispatch for adding items to the cart

  useEffect(() => {
    // Fetch products from Firestore
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'productos'); // Your collection name
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product }); // Dispatch action to add item to cart
  };

  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Centering Product Cards */}
      <div className="flex justify-center flex-wrap gap-4 pt-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}  
            productName={product.name}
            description={`Available: ${product.available ? 'In Stock' : 'Out of Stock'}`}
            price={`$${product.price}`}
            imageUrl={product.imageUrl || ""} 
            onAddToCart={() => handleAddToCart({ id: product.id, productName: product.name, price: product.price })} // Pass add to cart handler
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
