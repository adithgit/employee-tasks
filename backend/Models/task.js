const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
var Task = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
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
        default: "low"
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', Task);