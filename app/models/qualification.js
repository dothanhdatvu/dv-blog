// app/models/qualification.js
var mongoose = require('mongoose');

module.exports = mongoose.model('Qualification', {
    school: String,
    course: String,
    year: Number,
    description: String
});
