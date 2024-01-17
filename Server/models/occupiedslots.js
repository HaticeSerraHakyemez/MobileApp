const mongoose = require('mongoose')

const occupiedslots = new mongoose.Schema({
  trainer: {
    type: String,
    required: true
  },
  customer: {
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

module.exports = mongoose.model('occupiedslots', occupiedslots)