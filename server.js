const express = require('express');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config( { path: __dirname + "/variables.env" } );

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;


const app = express();

const mailchimp = new Mailchimp(mc_api_key);

// API Endpoint

app.get("/api/memberAdd", (req, res) => {
    mailchimp
        .post(`/lists/${list_id}/members/`, {
            email_address: req.query.email,
            status: "subscribed"
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

const whitelist = ['http://localhost:3000', 'http://localhost:9001', 'https://git.heroku.com/dry-inlet-08880.git']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);