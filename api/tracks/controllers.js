const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM tracks`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;
    const sql = `select * from tracks where trackid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
   },
  create: (req, res) => {
    // read row data from body
    const name = req.body.Name;
    const albumid = req.body.AlbumId;
    const mediaTypeId = req.body.MediaTypeId;
    const genreId = req.body.GenreId;
    const composer = req.body.Composer;
    const milliseconds = req.body.Milliseconds;
    const bytes = req.body.Bytes;
    const unitPrice = req.body.UnitPrice;

    const sql = `insert into tracks (name, albumid, mediatypeid, genreid, composer, milliseconds, bytes, unitprice)
     values ('${name}', '${albumid}', '${mediaTypeId}', '${genreId}', '${composer}', '${milliseconds}', '${bytes}', '${unitPrice}')`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = parseInt(req.params.id);
    const name = req.body.Name;
    const albumid = req.body.AlbumId;
    const mediaTypeId = req.body.MediaTypeId;
    const genreId = req.body.GenreId;
    const composer = req.body.Composer;
    const milliseconds = req.body.Milliseconds;
    const bytes = req.body.Bytes;
    const unitPrice = req.body.UnitPrice;
    

    const sql = `update tracks set name = '${name}', albumid = '${albumid}', mediatypeid = '${mediaTypeId}', genreid = '${genreId}', composer = '${composer}', milliseconds = '${milliseconds}', bytes = '${bytes}', unitprice = '${unitPrice}' 
    where trackid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql = `delete from tracks where trackid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.send('Track deleted');
    });
   }
}

module.exports = controllers;
