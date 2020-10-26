const express = require("express");
const fs = require ("fs");
const path = require ("path");

const PORT = 3000;

let app =express();
let db = require ("./Develop/db/db.json");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

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
app.get("./Develop/public/assets/css/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/assets/css/styles.css"));
});

app.get("./Develop/public/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.js"));
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

// request for posting and deleting the notes //

app.post('/api/notes', (req,res) => {
    let newNote = req.body;
    let id = dbNotes.length;
    newNote.id = id + 1;
    dbNotes.push(newNote);
    dbUpdate(dbNotes);
    return res.json(dbNotes);
});

// this deletes the notes //
app.delete("/api/notes/:id", (req,res) => {
    let id = req.params.id;
    let x = 1;
    delete dbNotes[id - 1];
    dbUpdate(dbNotes);
    res.send(dbNotes);
});


// listener to PORT 3000 *todos: change to Proccess.env when deploying to heroku//

app.listen(PORT, function () {
    console.log("https://localhost:" + PORT + " is listening");
})