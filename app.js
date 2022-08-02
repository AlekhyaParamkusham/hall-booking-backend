const express = require("express");
const app = express();
const hallRoute = require("./routes/hall");
const userRoute = require("./routes/user");

const cors = require("cors");

// Middlewares
// Enable CORS for all origin
app.use(cors());

// Purpose => Parse Request Body
app.use(express.json());
app.use("/halls", hallRoute);
app.use("/users", userRoute);

module.exports = app;
