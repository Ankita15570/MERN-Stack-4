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
app.post("/api/create-item", async (req, res) => {
  try {
    const { name, description, sellingprice } = req.body;
    const saveItem = new Items({
      name,
      description,
      sellingprice,
    });
    await saveItem.save();
    res
      .status(201)
      .json({ message: "Item created successfully", item: saveItem });
  } catch (error) {
    console.error(error);
  }
});

// 2. Update Item
app.put("/api/update-item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, sellingprice } = req.body;
    const updateItem = await Items.findByIdAndUpdate(
      id,
      { name, description, sellingprice },
      { new: true },
    );
    if (!updateItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item updated successfully", item: updateItem });
  } catch (error) {
    console.error(error);
  }
});

// 3. Delete Item
app.delete("/api/delete-item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await Items.findByIdAndDelete(id);
    if (!deleteItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully", item: deleteItem });
  } catch (error) {
    console.error(error);
  }
});

// 4. Get all records
app.get("/api/get-all-items", async (req, res) => {
  try {
    const items = await Items.find();
    res.json({ message: "Get all items List", items });
  } catch (error) {
    console.error(error);
  }
});

// Health Start API
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is Running" });
});

// Server start
const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
