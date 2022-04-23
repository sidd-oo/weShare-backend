const express = require('express');
const app = express();
const connectDB = require('./config/db');
const fileRoute = require('./routes/files');
const showRoutes = require("./routes/show"); 
const downloadRoutes = require("./routes/download");
const PORT = process.env.PORT || 3000;
const path = require('path');
const { download } = require('express/lib/response');

connectDB();

//Template engine
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

//Parse JSON
app.use(express.json());

//Static files path set
app.use(express.static('public'));

//Routes
app.use("/api/files", fileRoute);
app.use("/files", showRoutes);
app.use("/files/download", downloadRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})