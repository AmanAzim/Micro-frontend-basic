import React, { useState, useEffect } from "react";

import { login, jwt } from "./cart";

function CardContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    login("sally", "123");

    jwt.subscribe((val) => setToken(val ?? ""));

    return jwt.subscribe().unsubscribe(); // RxJs subscribe returns an unsubscribe so when we return jwt.subscribe it will return an unsubscribe doing the needed cleanup of useEffect
  }, []);

  useEffect(() => {
    console.log(jwt);
  }, [jwt]);
  return <div>Jwt: {token}</div>;
}

export default CardContent;
