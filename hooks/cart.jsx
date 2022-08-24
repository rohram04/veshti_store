import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: { price: 0, quantity: 0 },
    products: {},
  },
  reducers: {
    increment: (state, action) => {
      const payload = { ...action.payload };
      if (payload.id in state.products) {
        state.products[payload.id]["quantity"] += 1;
      } else {
        payload["quantity"] = 1;
        state.products[payload.id] = payload;
      }
      state.total["price"] +=
        state.products[payload.id]["default_price"]["unit_amount"] / 100;
      state.total.quantity += 1;
    },
    remove: (state, action) => {
      const quantity = state.products[action.payload.id]["quantity"];
      state.total["price"] -=
        (state.products[action.payload.id]["default_price"]["unit_amount"] *
          quantity) /
        100;
      state.total["quantity"] -= quantity;
      delete state.products[action.payload.id];
    },
  },
});

export const { increment, remove } = cartSlice.actions;

export default cartSlice.reducer;
