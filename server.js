var express = require('express');
const path = require("path");

var app = express();

app.listen(8080, function() {
    console.log('Listening on port 8080');
});
app.use(express.static("static"));

//Change the './' to point to the root of your angular app
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/main.html"));
});

//Send everything to your index.html page
// app.get('/*', function(req, res) {
//   res.sendFile(path.resolve('./main.html'));
//  });