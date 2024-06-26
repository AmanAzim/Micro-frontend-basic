import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { fetchProducts, fetchProductById, currency } from "home/products";
import placeAddToCart from "addtocart/placeAddToCart";
import "./index.scss";

function PdpContent() {
  const { id } = useParams();
  const addToCartRef = useRef(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((p) => setProduct(p));
    }
  }, [id]);

  useEffect(() => {
    if (addToCartRef.current) {
      placeAddToCart(addToCartRef.current, id);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCartRef}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}

export default PdpContent;
