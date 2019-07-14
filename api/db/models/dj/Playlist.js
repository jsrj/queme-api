const mongoose = require('mongoose')

// Supporting Models
const Song = require('./Song')

/* A PLAYLIST IS SIMILAR TO A COLLECTION EXCEPT THAT IT IS PUBLICLY AVAILABLE (MANY-TO-MANY) AND CAN BE THEMED */
module.exports = mongoose.model('playlists', new mongoose
.Schema({
	playlistID: { type: String },                 // The Playlists's GUID
	creator:    { type: String },                 // The Creator DJ's GUID
	name:       { type: String },                 // The Name of the Playlist
  category:   { type: String, default: "ALL" }, // The category of the Playlist
  songList:   { type: [Song] }
}))
