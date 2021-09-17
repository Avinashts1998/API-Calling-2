const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
const path = require("path");
let db = null;

const dbPath = path.join(__dirname, "cricketTeam.db");

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => console.log("Server Started Succsessfully.!!"));
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();
