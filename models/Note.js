const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId
    },
  title: String,
  body: String
})

module.exports = mongoose.model('Note', Note)
