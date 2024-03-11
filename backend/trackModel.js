const Pool = require('pg').Pool

// const connectionString = 'postgres://chipichap:root@replaytest.localhost:5432/tracks'
const pool = new Pool({
  user: 'chipichap',
  host: 'localhost',
  database: 'replaytest',
  password: 'root',
  port: 5432,
  // connectionString,
});

const getTracks = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM tracks", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
//create a new track record in the databsse
const createTracks = (body) => {
  return new Promise(function (resolve, reject) {
    const { title, src, author, thumbnlnk } = body;
    pool.query(
      "INSERT INTO tracks (title, src, author, thumbnail) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, src, author, thumbnlnk],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new merchant has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
//delete a merchant
const deleteTracks = (src) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM tracks WHERE id = $1",
      [src],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Merchant deleted with src: ${src}`);
      }
    );
  });
};
//update a merchant record
const updateTracks = (src, body) => {
  return new Promise(function (resolve, reject) {
    const { title, author } = body;
    pool.query(
      "UPDATE tracks SET title = $1, author = $2 WHERE src = $3 RETURNING *",
      [title, author, src],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getTracks,
  createTracks,
  deleteTracks,
  updateTracks
};