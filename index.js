const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const cors = require("cors");
app.use(cors());

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
    .then(() =>console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err)
    });

    app.use(express.json());
  app.use("/api/user", userRoute);
  app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
});
