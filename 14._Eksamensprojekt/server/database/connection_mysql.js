import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "bob",
    password: "x",
    database: "naruto",
});

export default connection;