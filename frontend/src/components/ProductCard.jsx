import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-3 rounded"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View
      </Link>
    </div>
  );
}

export default ProductCard;
