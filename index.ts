import express from "express";
import cors from "cors";
import pool from "./mysql/connection";
const dotenv = require('env')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/order", async (req, res, next) => {
  try {
    const { body } = req;
    const arrOrder = body.arr;

    const dataFlight = await pool.query("SELECT data FROM DEV)");
    const orderedFlight = orderArray(dataFlight.data);
    res.json(orderedFlight);
  } catch (err) {
    throw err;
  }
});

export const orderArray = (arr: any) => {
  const newArray: any = [];
  // const copyArr = arr;
  let toInit = arr[0].to;
  let fromInit = arr[0].from;
  newArray.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (toInit === arr[j]?.from) {
        newArray.push(arr[j]);
        toInit = arr[j]?.to;
      } else if (fromInit === arr[j]?.to) {
        newArray.unshift(arr[j]);
        fromInit = arr[j]?.from;
      }
    }
  }
  console.log("test", newArray);
};

app.listen(3000, () => {
  console.log("Server backend running");
});
