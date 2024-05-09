import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <Link id="product" to={`/product/${p.id}`}>
            <img src={p.image} alt={p.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link id="product" to={`/product/${p.id}`}>
                <p>{p.name}</p>
              </Link>
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
