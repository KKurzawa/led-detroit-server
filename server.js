const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//comment out when deploying
const PORT = process.env.PORT || 3001;

//comment out when working localally
// const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@leddetroitcommentsdb.fkxervi.mongodb.net/CommentsDB`)
app.use("/", require("./routes/commentRoute"))

app.listen(PORT, function () {
    console.log("express server is running on port 3001");
})