const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/db");
app.use(express.json());
app.use(cors());
connectDB();

app.post("/api/create-items", addItem);
app.put("/api/Update-items", editItem);
app.delete("/api/delete-items/:id", deleteItem);
app.get("/api/get-all-items", getAllItems);

//helth API
app.get("/helth", (req, res) => {
  res.status(200).json({ message: "Server is Runing" });
});

//server start
const PORT = 9090;
app.listen(PORT, () => {
  console.log("Server Started");
});
