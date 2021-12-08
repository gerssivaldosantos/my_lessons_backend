const {Schema, model } = require('mongoose');

const lessonSchema = new Schema ({
    Name: String,
    Description: String,
    icon: String
});

module.exports = model('Lesson', lessonSchema);