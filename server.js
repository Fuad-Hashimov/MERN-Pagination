require("dotenv").config({path:'./.env'});
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT,()=> console.log(`Server is running ${PORT}`));


