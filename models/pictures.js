const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picturesSchema = new Schema({
  src: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Pictures = mongoose.model('Pictures', picturesSchema);