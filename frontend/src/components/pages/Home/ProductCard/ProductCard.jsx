import { Link } from "react-router-dom";

const ProductCard = ({ name, image, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <article
        className="bg-white rounded-lg shadow-md overflow-hidden"
        aria-labelledby={`product-${name}`}
      >
        <div className="-200 h-64">
          <img
            src={image}
            className="w-full h-full object-contain"
            alt={`image of ${name}`}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
