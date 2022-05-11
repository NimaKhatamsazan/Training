var express = require('express');
const path = require("path");

var app = express();

app.listen(5500, function() {
    console.log('Listening on port 5500');
});
app.use(express.static("static"));

//Change the './' to point to the root of your angular app
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

