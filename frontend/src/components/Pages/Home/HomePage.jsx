import MainLayout from "../../common/MainLayout/MainLayout.jsx";
import Pagination from "./Pagination/Pagination.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";
import products from "./ProductCard/products.js";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <h1 className="text-4xl font-bold text-center text-black mb-12">
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
