const express = require("express");
const fs = require ("fs");
const path = require ("path");

const PORT = 3000;

let app =express();
let db = require ("./Develop/db/db.json");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const dbNotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./Develop/db/db.json"), (err, data) => {
        if (err) throw err;
    })
);

const dbUpdate = dbNotes => {
    fs.writeFileSync(
        path.join(__dirname, "./Develop/db/db.json"),
        JSON.stringify(dbNotes),
        err => {
            if (err) throw err;
        }
    );
};

// app.get requests for html pages //
app.get("/assets/css/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/assets/css/styles.css"));
});

app.get("/assets/js/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.get("/api/notes", (req,res) => {
    return res.json(dbNotes);
});


// add app push //


app.listen(PORT, function () {
    console.log("https://localhost:" + PORT + " is online");
})