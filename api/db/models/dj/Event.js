const mongoose = require('mongoose')

// Supporting Models
const SongTimer  = require('../../../util/SongTimer')

/* THE DJ OBJECT WHICH TRACKS A DJ'S COLLECTION, PLAYLISTS (IF ANY), AND CURRENT/PAST EVENTS */
module.exports = mongoose.model('events', new mongoose
.Schema({
  name:          { type: String },                                     // The Event's name
  creator:       { type: String },                                     // The DJ who created this Event
  locationName:  { type: String },                                     // The name of Venue hosting the Event
  eventDuration: { type: String, default: new SongTimer(30, 00, 00) }, // The Event's total duration in minutes
  eventRef:      { type: String },                                     // GUID Ref. to Event (For ratings)

  // GUID ref. list to optional Playlists. If this is empty, controller should return DJ's collection instead
  songList:      { type: [String] }
}))
