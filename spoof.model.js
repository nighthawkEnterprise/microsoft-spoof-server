const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Spoof = new Schema({
   date: {
     type: String,
   },
   lat: {
     type: Number,
   },
   long: {
     type: Number,
   },
   time: {
     type: String,
   },
   username: {
     type: String,
   },
   password: {
     type: String
   }
})

module.exports = mongoose.model('Spoof', Spoof);
