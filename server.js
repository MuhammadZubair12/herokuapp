const express = require('express');
const path = require('path');
const app = express();


//Serve static file
app.use(express.static(__dirname + '/dist/herokungapp'));


//Send all request to index.html

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/herokungapp/index.html'));
})


//default Heroku PORT
app.listen(process.env.PORT || 3000);