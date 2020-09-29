const mongoose = require('mongoose')


const historyMessage = new mongoose.Schema({
  username: {
    type : String
  },
  date: {
    type : Date,
    default : Date.now
  },
  message : {
    type : String
  },
},{timestamps: true})


module.exports = mongoose.model('History',historyMessage)
