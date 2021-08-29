const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, required: true },
    title: { type: String, },
    image: { type: String, },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, required: true },
    level: { type: String, },

}, { timestamps: true });

// Add plugins:
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);