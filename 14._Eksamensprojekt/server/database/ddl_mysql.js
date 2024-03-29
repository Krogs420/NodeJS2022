import db from "./connection_mysql.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
  db.execute(`
    DROP TABLE IF EXISTS users
    `);
}

db.execute(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255)
);
`);

db.execute(`INSERT INTO users (mail, password, role) VALUES ('test@test.dk', '123', 'admin')`);

db.end();