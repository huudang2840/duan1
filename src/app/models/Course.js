const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    title: { type: String, },
    image: { type: String, },
    slug: { type: String, },
    videoId: { type: String, },

}, { timestamps: true });

module.exports = mongoose.model('Course', Course);