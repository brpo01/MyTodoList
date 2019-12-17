let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// let path = require('path');

let toDoSchema = new Schema({
    text:{type:String},
    timestamp:{type:Date, 'default':Date.now()} 
});

module.exports = mongoose.model('todo', toDoSchema)