const ProductCard = ({ name, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="-200 h-64">
        <img src={image} className="w-full h-full object-contain" alt="image" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
