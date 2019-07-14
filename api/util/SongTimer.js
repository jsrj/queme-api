function SongTimer (minutes, seconds, milliseconds) {

  // Priv.
  this._minutes      = minutes
  this._seconds      = seconds
  this._milliseconds = milliseconds

  // Publ.
  this.length = `${this._minutes}:${this._seconds}`
}

module.exports = SongTimer