const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
var Employee = new Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        unique: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
});

module.exports = mongoose.model('Employee', Employee);