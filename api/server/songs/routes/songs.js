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

// GET - All Songs that exist in the app
router.get('/', (req, res, next) => {
  Song.find()
  .then((songs) => {
    if (songs === null) {
      res.status(200).json({ 'message':'Could not find any songs...' })
    } else {
      res.status(200).json({ 'songs':songs })
    }
  })
})

// GET - All Songs by Artist Name
router.get('/by-artist/:artistName', (req, res, next) => {
  Song.find( { artistName:req.params.artistName }, (err, songs) => {
    if (err) {
      res.status(500).json(err).end()
    } else {
      res.status(200).json(songs)
    }
  })
})

// GET - All Songs with a length that is shorter than a specified mm/ss time
router.get('/shorter-than/:minutes/:seconds', (req, res, next) => {
  res.status(200).json({ 'minutes':req.params.minutes, 'seconds':req.params.seconds })
})

// GET - One Song by Song Name
router.get('/by-song/:songName', (req, res, next) => {
  Song.findOne( { songName: req.params.songName }, (err, song) => {
    if (err) {
      res.status(500).json(err).end()
    } else {
      res.status(200).json(song)
    }
  })
})

// GET - One Song by ID
router.get('/:id', (req, res, next) => {
  Song.findOne( { songID:req.params.id }).then((song) => {
    res.status(200).json(song)
  })
})

// POST - New Song
router.post('/', (req, res, next) => {
  let songID      = generateID()
  let songName    = req.body.songName
  let artistName  = req.body.artistName
  let albumArtURI = req.body.albumArtURI || '#'
  let length      = new Timer(req.body.minutesLong, req.body.secondsLong).length

  let newSong = new LocalSongModel(
    songID,
    songName,
    artistName,
    albumArtURI,
    length
  )

  new Song(newSong).save().then((createdSong) => {
    if (createdSong === null) {
      res.status(500).json({ 'error':'Unexpected Error encountered while creating new song.' })
    } else {
      res.status(201).json(createdSong)
    }
  })
})

// PATCH - Update Song Details
router.patch('/:id', (req, res, next) => {
  [
    {
      prop: 'songName',
      val: req.query.songName
    },
    {
      prop: 'artistName',
      val: req.query.artistName
    },
    {
      prop: 'albumArtURI',
      val: req.query.albumArtURI,
    }
  ]
  .forEach((updatedProp) => {
    if (updatedProp.val != null) {
      let propToUpdate = {}
      propToUpdate[updatedProp.prop] = updatedProp.val
      console.log(propToUpdate)
      Song.findOneAndUpdate({ songID:req.params.id }, propToUpdate, (err, updatedSong) => {
        if (err) {
          res.status(500).json({ error:err })
        } else {
          res.status(202).json(updatedSong)
        }
      })
    }
  })
})


module.exports = router