'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');
var apiRoutes   = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner      = require('./test-runner');
const helmet = require("helmet");
const robots = require("express-robots-txt");


var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//robots.txt sitemap
app.use(robots(__dirname + '/robots.txt'));

// sitemap.xml

app.get('/sitemap.xml', function(req, res) {
res.sendFile(process.cwd()+'/sitemap.xml');
});
//


app.use(function(req, res, next) {
  res.set({
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers" : "Origin, X-Requested-With, content-type, Accept"
  });
  app.disable('x-powered-by');
  next();
});

app.use(helmet.hidePoweredBy({ setTo: "PHP 4.2.0" }));
app.use(helmet()); // this covers all helmet default security




//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });


//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
