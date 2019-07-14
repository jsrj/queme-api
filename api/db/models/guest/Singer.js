const mongoose = require('mongoose')

/* A SIMPLE PERSISTED OBJECT FOR TRACKING LOGGED-IN/REPEAT USERS IN AN EVENT QUEUE */
module.exports = mongoose.model('singers', new mongoose
.Schema({
  singerID:     { type:  String  }, // The Singer's public GUID
  userID:       { type:  String  }, // The associated authenticated userGuid
  firstName:    { type:  String  }, // The Singer's Submitted First Name
  lastName:     { type:  String  }, // The Singer's Submitted Last  name
  chosenSong:   { type:  String  }, // The GUID of the Guest's selected song
  playlists:    { type: [String] }, // The Singer/User's self-made playlists
  favoriteDJs:  [
    { 
      djID:   String, 
      djName: String 
    }
  ],
  eventRatings: [
    { 
      eventRef:  String, 
      eventName: String, 
      comment:   String,
      rating:    Number 
    }
  ]
}))
