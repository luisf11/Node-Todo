var mongoose = require('mongoose');

exports.TodoSchema = new mongoose.Schema({
    text: { 
        type: String,
    },
    isCompleted: { 
        type: Boolean, 
        default: false
    }
});