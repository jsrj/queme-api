const mongoose = require('mongoose')

// Supporting Models
const Event    = require('./Event')
const Playlist = require('./Playlist')

/* THE DJ OBJECT WHICH TRACKS A DJ'S COLLECTION, PLAYLISTS (IF ANY), AND CURRENT/PAST EVENTS */
module.exports = mongoose.model('users', new mongoose
.Schema({
  djID:      { type: String     }, // The DJ's GUID
  userID:    { type: String     }, // The DJ's actual User GUID
  djName:    { type: String     }, // The DJ/Company's Display Name
  songBook:  { type: String     }, // The DJ's total Song Collection One-To-One ref. by GUID
  playlists: { type: [Playlist] }, // A list of the DJ's saved/created playlists
  events:    { type: [Event]    }  // A list of every Event the DJ/Company has hosted or is currently hosting
}))
