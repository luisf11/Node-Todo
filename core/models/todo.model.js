var Schema = require("../schemas/todo.schema");
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', Schema.TodoSchema);