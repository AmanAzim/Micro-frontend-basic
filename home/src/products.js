const API_SERVER = "http://localhost:8080";

export const fetchProducts = () => {
  return fetch(`${API_SERVER}/products`).then((res) => res.json());
};

export const fetchProductById = (id) => {
  return fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
