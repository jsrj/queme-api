const mongoose = require('mongoose')

// Supporting Models
const Song      = require('./Song')
const SongTimer = require('../../../util/SongTimer')

/* THE DJ OBJECT WHICH TRACKS A DJ'S COLLECTION, PLAYLISTS (IF ANY), AND CURRENT/PAST EVENTS */
module.exports = mongoose.model('queues', new mongoose
.Schema({
  _qid:               { type:  String  }, // The Queue's internal ID
  eventRef:           { type:  String  }, // The GUID of the Event that a Queue is serving
  nextPerformance:    {                   // _______________________________________________________
    performerRef: String,                 // The GUID ref. of the Guest/Singer who will perform next
    songRef:      String                  // The GUID ref. to the song that will be performed
  },                                      // -------------------------------------------------------
  currentPerformance: {                   // _______________________________________________________
    performerRef: String,                 // The GUID ref. of the Guest/Singer who is currently performing
    songRef:      String                  // The GUID ref. to the song that is being performed
  },                                      // _______________________________________________________
  pastPerformances:   [
    {                                     // _______________________________________________________
      performerRef: String,               // The GUID ref. of a Guest/Singer who previously performed
      songRef:      String                // The GUID ref. of a Song that was previously performed
    }                                     // _______________________________________________________
  ],
  allPerformances:    [
    {                                     // _______________________________________________________
      performerRef: String,               // The GUID ref. of every non-no-show past, present, and future
      songRef:      String                // The GUID ref. of the song they performed
    }                                     // _______________________________________________________
  ],
  noShows:            { type: [String] }  // A list of GUID ref.s to any Guest/Singer who was marked as a no-show
}))
