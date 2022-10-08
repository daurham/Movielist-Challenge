const model = require('./model');
module.exports = {
  getMovies: (req, res) => {
    console.log('getting movies');
    let query = 'select * from movies';
    model.getMovies(query, (err, result) => {
      if (err) console.error('Err in getMovies:', err);
      if (result) res.status(200).send(result);
    });
  },
  postMovie: (req, res) => {
    const { title } = req.body;
    let query = 'insert into movies (title) values (?)';
    let data = [title];
    model.postMovie(query, data, (err, result) => {
      if (err) console.error('Err in postMovie:', err);
      if (result) res.sendStatus(201);
    });
  },
  patchMovie: (req, res) => {
    const { title, id } = req.body;
    let query = 'update movies set title = ? where id = ?';
    let data = [title, id];
    model.patchMovie(query, data, (err, result) => {
      if (err) console.error('Err in patchMovie:', err);
      if (result) {
        console.log('PATCH Result: ', result);
        res.sendStatus(203);
      }
    });
  },
  deleteMovie: (req, res) => {
    const { id } = req.body;
    let query = 'delete from movies where id = ?';
    let data = [id];
    console.log(req.body);
    model.deleteMovie(query, data, (err, result) => {
      if (err) console.error('Err in deleteMovie:', err);
      if (result) {
        console.log('DELETE Result', result);
        res.sendStatus(204);
      }
    });
  },
};