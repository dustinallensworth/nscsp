var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;  // set our port

// ROUTES
var router = express.Router();  // get an instance of the express Router

// application
app.use(express.static(__dirname + '/.'));

app.get('/index.html', function(req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

function handleError(res, reason, message, code) {
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}

// START THE SERVER
app.listen(port);
console.log('Northside Child Safety Program up on port: ' + port);
