import { useState, useEffect } from "react";
import MainLayout from "../../common/MainLayout/MainLayout";
import Pagination from "./Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
//import products from "./ProductCard/products.js";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=6");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <MainLayout>
        <h1
          id="products-heading"
          className="text-4xl font-bold text-center text-black mb-12"
        >
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.images[0]}
            />
          ))}
        </div>
        <Pagination />
      </MainLayout>
    </>
  );
};

export default HomePage;
