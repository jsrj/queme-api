const express = require('express')
const router  = express.Router()
const uuid    = require('uuid')

// Model(s)
const Song = require('../../../db/models/dj/Song')
const Timer = require('../../../util/SongTimer')

// Utilities
class LocalSongModel {
  constructor(songID, songName, artistName, albumArtURI, length) {
    this.songID = songID;
    this.songName = songName;
    this.artistName = artistName;
    this.albumArtURI = albumArtURI;
    this.length = length;
  }
}
function generateID() {
  return uuid().split('-').join('').toUpperCase()
}

// GET - All Songs
router.get('/', (req, res, next) => {
  Song.find()
  .then((songs) => {
    if (songs === null) {
      res.status(200).json({ 'message':'Could not find any songs...' })
    } else {
      res.status(200).json(songs)
    }
  })
})


module.exports = router