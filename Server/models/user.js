const mongoose = require('mongoose')

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  __v: { type: Number, select: false}
})

module.exports = mongoose.model('customers', user)
