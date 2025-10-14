import { useState, useEffect } from "react";
import MainLayout from "../../common/MainLayout/MainLayout";
import Pagination from "./Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
import Loader from "../../common/Loader/Loader";
//import products from "./ProductCard/products.js";
import { FaExclamationTriangle } from "react-icons/fa";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(6);
  //pagination state

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error("Failed to Fetch Products!");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //pagination logic
  const lastProductIndex = currentPage * productPerPage; //12
  const firstProductIndex = lastProductIndex - productPerPage; //6
  const currentProducts = products.slice(firstProductIndex, lastProductIndex); //products.slice(6, 12)
  //pagination logic

  if (isLoading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center mt-20 gap-2 text-red-600">
          <FaExclamationTriangle className="text-3xl" aria-hidden="true" />
          <p className="font-bold text-2xl" role="alert">
            {error}
          </p>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <>
        <h1
          id="products-heading"
          className="text-4xl font-bold text-center text-black mb-12"
        >
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((currentProduct) => (
            <ProductCard
              key={currentProduct.id}
              id={currentProduct.id}
              name={currentProduct.title}
              image={currentProduct.images[0]}
            />
          ))}
        </div>
        <Pagination
          totalProducts={products.length}
          ProductPerPage={productPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </>
    </MainLayout>
  );
};

export default HomePage;
