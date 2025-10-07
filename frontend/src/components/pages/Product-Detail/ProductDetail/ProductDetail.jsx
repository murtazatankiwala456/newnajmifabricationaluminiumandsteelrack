import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
//import products from "../../Home/ProductCard/products";
import { useParams } from "react-router-dom";
import Loader from "../../../common/Loader/Loader";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  const whatsappNumber = "919977436552";
  const whatsappMessage = `Hi, I'm interested in ${product.title} what will be the price?`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="product-detail-heading"
    >
      <h1
        className="text-4xl font-bold text-headings mb-8"
        id="product-detail-heading"
      >
        Product Detail
      </h1>
      <div
        className="bg-secondary rounded-lg shadow-lg overflow-hidden relative"
        aria-label={`Details about ${product.title}`}
      >
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-neutral-accent">
            <img
              className="object-cover w-full h-full rounded"
              alt={`Image of ${product.title || "Product"} `}
              src={product.images?.[0]}
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-headings mb-4">
              {product.title}
            </h2>
            {/* <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2">
              <li>Size:6ft and 10ft</li>
              <li>Color:Black,Blue and Red</li>
              <li>Weight:(L)26G and (M)22G</li>
            </ul> */}
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <button className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <a
              href={whatsappLink}
              target="_blank"
              aria-label={`Contact us on WhatsApp about ${product.title}`}
            >
              <FaWhatsapp className="text-3xl" aria-hidden="true" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
