const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: String,
        image: String,
        slug: { type: String, slug: ['name', 'videoId'] },
        videoId: String,
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('Course', Course);
