const mongoose = require('mongoose')




// A schema is an object that informs the database and tells it what to list for it's columns, rows, and values. 

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },

    description: {
        type: String,
        

    },

    markdown: {
        type: String,
        required: true,

    },

    author: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

})


module.exports = mongoose.model('Article', articleSchema) 