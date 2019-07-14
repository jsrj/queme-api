const mongoose = require('mongoose')
const SongTimer = require('../../../util/SongTimer')

/* THE BASIC DATA NEEDED FOR ACCURATELY TRACKING AND IDENTIFYING INDIVIDUAL SONGS IN A COLLECTION */
module.exports = mongoose.model('songs', new mongoose
.Schema({
    songID:      { type: String }, // The Song's GUID
    songName:    { type: String },
    artistName:  { type: String },
    albumArtURI: { type: String },
    length:      { type: String, default: new SongTimer(0, 0, 0).length } // A String correlating to SongTimer.length
  }))
  