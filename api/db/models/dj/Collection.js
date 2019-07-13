const mongoose = require('mongoose')

/* A COLLECTION IS A ONE-TO-ONE LIST RELATED TO A DJ THAT STORES REFERENCES TO EVERY SONG THAT A DJ HAS ON OFFER */
module.exports = mongoose.model('users', new mongoose
.Schema({
	ownerID:        { type: String   }, // The DJ's GUID
	artistsIndex:   { type: [String] }, // A non-linked list of Artist names in the DJ's collection
	songCollection: { type: [Any]    }
}))
