import db from "./connection_splite.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_stock;
    `); 
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_types;
    `);

}

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_types (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    isVegetarian BOOLEAN
);
`);

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    inittial_amount INTEGER,
    comment VARCHAR(255),
    added_to_stock TIMESTAMP NOT NULL DEF,
    animal_feed_types_id INTEGER,
    CONSTRAINT fk_feed_type FOREIGN KEY (id) REFERENCE animal_feed_types(id),
    
);
`);

if (isInDeleteMode) {
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('carrot');`);
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('zebrea');`);
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('mosquitoes');`);

    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (120, 120, 1);`);
    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (2000, 2000, 3);`);
}

db.end();
