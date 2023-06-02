const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    base_unit: String,
    quote_unit: String,
    name: String,
    type: String,
    buy: String,
    sell: String,
    volume: String,
    open: Number,
    last: String,
    at: Number,
    high: String,
    low: String,
});

const Data = mongoose.model("data", dataSchema);
module.exports = Data;