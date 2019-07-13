const mongoose = require('mongoose')

/* THE BASIC DATA NEEDED FOR ACCURATELY TRACKING AND IDENTIFYING INDIVIDUAL SONGS IN A COLLECTION */
module.exports = mongoose.model('users', new mongoose
.Schema({
	songID:      { type: String }, // The Song's GUID
	songName:    { type: String },
  artistName:  { type: String },
  albumArtURI: { type: String },
  length:      { type: Any    } // A SongTimer Object
}))
