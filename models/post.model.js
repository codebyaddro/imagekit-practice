const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
}, { timestamps: true, versionKey: false });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;