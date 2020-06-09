const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM playlists`;

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
    const sql = `select * from playlists where playlistid is '${id}'`;

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

    const sql = `insert into playlists (name) values ('${name}')`;

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

    const sql = `update playlists set name = '${name}' where playlistid is '${id}'`;

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

    const sql = `delete from playlists where playlistid is '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.send('Playlist deleted')
    });
   }
}

module.exports = controllers;
