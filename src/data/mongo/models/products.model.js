import { Schema, model } from "mongoose";

const collection = "products"
const schema = new Schema(
  {
    title: { type: String, required: true },
    stock: { type: Number, default: 100 },
    price: { type: Number, default: 100 },
    category: {type: String, default: "none"},
    image: {
      type: Number,
      default: "https://cdn-icons-png.flaticon.com/512/4129/4129528.png",
    },
  },
  { timestamps: true }
);

const Product = model(collection, schema)

export default Product