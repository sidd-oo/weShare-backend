const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})