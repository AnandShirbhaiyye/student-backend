const mongoose = require('mongoose');
const Student = new mongoose.Schema({
    name: {type : 'string'},
    age: {type : 'number'},
    roll:{type : 'number'}
});

const model = mongoose.model('Student', Student);
module.exports = model;