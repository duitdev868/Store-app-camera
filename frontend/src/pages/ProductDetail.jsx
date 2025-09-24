import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-96 rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
