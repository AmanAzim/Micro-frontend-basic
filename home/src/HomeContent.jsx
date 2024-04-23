import React, { useState, useEffect } from "react";

import { fetchProducts, currency } from "./products";

function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <p>{p.name}</p>
            </div>
            <div className="flex-end">
              <p>{currency.format(p.price)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
