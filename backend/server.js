const express = require("express");
const connectDB = require("./db/config");
const dotenv = require("dotenv").config();
const port = 3000;

connectDB();

const app = express();

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("le server a démarré !" + port));
