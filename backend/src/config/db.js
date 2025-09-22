const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',   // điền mật khẩu nếu có
  database: 'mini_store'
});

// Dùng Promise wrapper
const db = pool.promise();

module.exports = db;

