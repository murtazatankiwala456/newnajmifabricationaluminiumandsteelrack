import Footer from "./components/common/Footer/Footer.jsx";
import Header from "./components/common/Header/Header.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import products from "./components/ProductCard/products.js";
const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4">
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
      </main>
      <Footer />;
    </>
  );
};

export default App;
