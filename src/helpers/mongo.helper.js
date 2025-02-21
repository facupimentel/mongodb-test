// este helper me ayudara a conectarme a la base de datos de mongo

import { connect } from "mongoose";

async function connectMongo(link) {
  try {
    console.log("mongo db connect"); 
    await connect(link);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default connectMongo;
