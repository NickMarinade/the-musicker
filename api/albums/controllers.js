const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM albums`;

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
    const sql = `select * from albums where albumid is '${id}'`;

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
   // const albumId = req.body.albumid
    const title = req.body.Title;
    const artistId = req.body.ArtistId;

    const sql = `insert into albums (title, artistid) values ('${title}', '${artistId}')`;

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
    const title = req.body.Title;
    const artistId = req.body.ArtistId;

    const sql = `update albums set title = '${title}', artistid = '${artistId}' where albumid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });


  },
  delete: (req, res) => {
    const id  = req.params.id;

    const sql = `delete from albums where albumid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.send('Album deleted')
    });
   }
}

module.exports = controllers;
