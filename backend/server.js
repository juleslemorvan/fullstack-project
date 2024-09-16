const express = require("express");
const port = 3000;

const app = express();

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("le server a démarré !" + port));
