const express = require("express");
const fs = require ("fs");
const path = require ("path");
const app = express();

// const PORT = 3000;
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname + "/notes.html"));
});

app.get("/api/notes", (request, response) => {
    response.sendFile(path.join(__dirname + "/db/db.json"));
});


app.post("/api/notes", function(request, response) {
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname + "/db/db.json")));
    notes.push(request.body);
    fs.writeFileSync(path.join(__dirname + "/db/db.json"), JSON.stringify(notes));
    response.end();
});

app.delete("/api/notes/:id", function (request, response) {
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname + "/db/db.json")));
    let newNotes = notes.filter(note => note.id !== request.params.id);
    fs.writeFileSync(path.join(__dirname + "/db/db.json"), JSON.stringify(newNotes));
    response.end();
})

app.get("*", function(request, response){
    response.sendFile(path.join(__dirname + "/index.html"));
});

// listener to PORT 3000 *todos: change to Proccess.env when deploying to heroku//

app.listen(PORT, function () {
    console.log("Online " + PORT);
})