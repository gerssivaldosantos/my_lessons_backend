const {Schema, model } = require('mongoose');

const lessonSchema = new Schema ({
    Name: String,
    Description: String,
    Icon: String
});

module.exports = model('Lesson', lessonSchema);