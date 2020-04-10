const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

//DB Connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("db connected.."))
  .catch((err) => console.log(err));

//POrt
const port = process.env.PORT || 5500;

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//myroutes
app.use("/api", authRoutes);

//start servers

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port} ...`);
});
