const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: String,
        required: [true,"Please provide a title"],
        minlength:[5,"Please provide a title at least 5 characters"],
        unique:true
    },
    description:{
        type: String,
        required:[true,"Please provide a content"],
        minlength:[20,"Please provide a title at least 20 characters"],
    },
    category: {
        type: String,
        required: [true, "please provide a content"],
    },
    image: {
        type: String,
        required: [true, "please provide a content"],
    },
    medium_url: {
        type: String,
        required: [true, "please provide a content"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Article",ArticleSchema)