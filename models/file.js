const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileScheme = new Schema({
    filename: { type: String, require: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String },
    reciever: { type: String },
},{ timestamps: true});

module.exports = mongoose.model('File', fileScheme);