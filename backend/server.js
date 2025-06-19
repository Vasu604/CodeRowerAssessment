const express = require("express");
const mongoose = require("mongoose");
const configRoutes = require("./routes/configRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/configurations", configRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(8080, () => console.log("Server running on port 8080"));
    })
    .catch((err) => console.log(err));
