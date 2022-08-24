import { error } from "../hooks/error";

export default async function checkout(dispatch, products) {
  if (Object.keys(products).length === 0) throw "Cart is Empty";
  const prices = Object.keys(products).map((id) => {
    return {
      id: products[id].default_price.id,
      quantity: products[id].quantity,
    };
  });
  console.log(prices);
  const response = await fetch("/api/stripeServer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prices }),
  });
  const data = await response.json();
  if ((await response.status) > 400)
    return dispatch(
      error({ status: true, code: response.status, msg: data.msg })
    );
  window.location.href = data.url;
}
