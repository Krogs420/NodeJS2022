import mysql from "mysql2";

const connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "zoo",
});

export default connection;
