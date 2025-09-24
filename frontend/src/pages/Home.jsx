import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container">
      
      <h1 className="text-3xl font-bold mb-6">Products</h1>
    </div>

  );
}

export default Home;
