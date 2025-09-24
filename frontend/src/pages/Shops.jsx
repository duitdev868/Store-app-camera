import { useEffect, useState } from "react";
import { getShops } from "../services/api";

function Shops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then((res) => setShops(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shops</h1>
      <ul className="space-y-3">
        {shops.map((s) => (
          <li key={s.id} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shops;
