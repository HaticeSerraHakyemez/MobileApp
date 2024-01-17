const mongoose = require('mongoose')

const availableslots = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  slot: {
    type: Number,
    required: true
  },
  __v: { type: Number, select: false}
})

module.exports = mongoose.model('availableslots', availableslots)