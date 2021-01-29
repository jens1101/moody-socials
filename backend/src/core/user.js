const pool = require("./pool");
const bcrypt = require("bcrypt");

function User() {}

User.prototype = {
  find: function (user, callback) {
    const field = Number.isInteger(user) ? "id" : "username";

    let sql = `SELECT * FROM users WHERE ${field} = ?`;

    pool.query(sql, user, function (err, result) {
      if (err) throw err;

      if (result.length) {
        callback(result[0]);
      } else {
        callback(null);
      }
    });
  },

  create: function ({ username, password }, callback) {
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users(username, password) VALUES (?, ?)`;
    const values = [username, encryptedPassword];

    pool.query(sql, values, function (err, result) {
      if (err) throw err;

      callback(result.insertId);
    });
  },

  login: function (username, password, callback) {
    this.find(username, function (user) {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          callback(user);
          return;
        }
      }

      callback(null);
    });
  },
};

module.exports = User;
