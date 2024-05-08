import React, { useState, useEffect } from "react";

import { fetchProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

import "./index.scss";

function HomeContent() {
  const isLoggedIn = useLoggedIn();
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
            <div className="text-sm mt-4">
              {p.description}
              {isLoggedIn && (
                <div className="text-right mt-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={() => addToCart(p.id)}
                    id={`addtocart_${p.id}`}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
