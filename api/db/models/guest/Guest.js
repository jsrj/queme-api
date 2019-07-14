const mongoose = require('mongoose')

/* A SIMPLE DISPOSABLE OBJECT FOR TRACKING ANONYMOUS USERS (GUESTS) IN AN EVENT QUEUE */
module.exports = mongoose.model('guests', new mongoose
.Schema({
  guestID:    { type: String }, // The Anonymous User's GUID
  firstName:  { type: String }, // The Guest's First Name
  lastName:   { type: String }, // The Guest's Last name
  chosenSong: { type: String } // The GUID of the Guest's selected song
}))
