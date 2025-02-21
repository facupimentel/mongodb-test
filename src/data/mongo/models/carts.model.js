// de esta manera se define un modelo

import { Schema, model } from "mongoose";

const collection = "carts";
const schema = new Schema(
  {
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

const Cart = model(collection, schema);

export default Cart;
