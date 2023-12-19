const express = require('express');
const priceRouter = require("./routes/prices");
const indexRouter = require("./routes/index");

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api/", indexRouter);
app.use("/api/price", priceRouter);



app.listen(port, () => {
  console.log('Server was started on PORT:8080')
});
