//API
// 1. API Create Item - get data values from front end (Item details) and store into Database
// 2. API Update Item - get Item Details from Front end which item we need to update
// 3. API Delete Item -  get Item Details from Front end an delete this record from database
// 4. API get all records - get all records from DB and show to UI frontend

console.log("Hello Node js project started");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Item-database")
  .then(() => console.log("mongo DB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

//schema-model-database table structure
const itemsSchema = new mongoose.Schema({
  name: String,
  description: String,
  sellingprice: Number,
});

const Items = new mongoose.model("Items", itemsSchema); //table or collection name

//API

// 1. Create Item
app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Items(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
