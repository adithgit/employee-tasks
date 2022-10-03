const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
var Task = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ["high", "low"],
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "finished"],
        default: "pending",
    }
});

module.exports = mongoose.model('Task', Task);