import { createSignal, Show, createEffect } from "solid-js";

import { cart, jwt, addToCart } from "cart/cart";
import "./index.scss";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        class="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
      >
        Add To Cart
      </button>
    </Show>
  );
};
