require('dotenv').config();
const mongoose = require("mongoose");

function connectDB() {
    //Database connection
    mongoose
    .connect(process.env.MONGO_CONNECTION_URL)
    .then(() => console.log("DB Connected Successfully!"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;