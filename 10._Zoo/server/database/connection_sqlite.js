import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const cennection = await open({
    filename: "zoo.db",
    driver: sqlite3.Database
});

export default cennection;
