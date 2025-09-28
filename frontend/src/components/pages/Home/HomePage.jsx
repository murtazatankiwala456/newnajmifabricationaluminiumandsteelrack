import MainLayout from "../../common/MainLayout/MainLayout";
import Pagination from "./Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
import products from "./ProductCard/products.js";

const HomePage = () => {
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
              name={product.name}
              image={product.imageUrl}
            />
          ))}
        </div>
        <Pagination />
      </MainLayout>
    </>
  );
};

export default HomePage;
