// backend/db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",     // tên user postgres
  host: "localhost",
  database: "khiem-postgres",     // tên database bạn tạo
  password: "123456",   // mật khẩu
  port: 5432,
});

module.exports = pool;