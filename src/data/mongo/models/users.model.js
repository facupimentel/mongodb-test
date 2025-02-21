// de esta manera se define un modelo

import { Schema, model } from "mongoose";

const collection = "users" // espacio virtual donde se van a almacenar todos los datos
const schema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "master"],
      avatar: {
        type: String,
        default:
          "https://media.ambito.com/p/accb5b389211cffcef4f2da0367332e1/adjuntos/239/imagenes/040/147/0040147462/gago-dtjpg.jpg",
      },
    },
  },
  { timestamps: true }
); //la forma que va a tener el documento

const User = model(collection, schema)

export default User;