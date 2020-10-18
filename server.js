const express = require("express");
const fs = require ("fs");
const path = require ("path");

const PORT = 3000;

let app =express();
let db = require ("./db/db.json");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const dbNotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "/db/db.json"), (err, data) => {
        if (err) throw err;
    })
);

const dbUpdate = dbNotes => {
    fs.writeFileSync(
        path.join(__dirname, "/db/db.json"),
        JSON.stringify(dbNotes),
        err => {
            if (err) throw err;
        }
    );
};

// app.get requests for html pages //
app.get("/assets/css/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
});

app.get("/assets/js/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req,res) => {
    return res.json(dbNotes);
});





app.listen(PORT, function () {
    console.log("https://localhost:" + PORT);
})