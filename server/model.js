const db = require('./db/index');

module.exports = {
  getMovies: (q, cb) => {
    db.query(q, cb);
  },
  postMovie: (q, data, cb) => {
    db.query(q, data, cb);
  },
  patchMovie: (q, data, cb) => {
    db.query(q, data, cb);
  },
  deleteMovie: (q, data, cb) => {
    db.query(q, data, cb);
  },
};