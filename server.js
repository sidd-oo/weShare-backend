const express = require('express');
const app = express();
const connectDB = require('./config/db');
const fileRoute = require('./routes/files')
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/api/files", fileRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})