'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get('/services', (req, res) => {
//   res.sendFile(path.join(__dirname, 'services.html'));
// });

// instead of using code above to serve static webpages use .use
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function (req, res) {
  var people = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 34,
      gender: "male"
    },
    {
      first_name: "Tom",
      last_name: "Jackson",
      age: 27,
      gender: "male"
    },
    {
      first_name: "Tracy",
      last_name: "Smith",
      age: 25,
      gender: "female"
    }
  ];

  res.json(people);

});

app.get('/download', function (req, res) {
  res.download(path.join(__dirname, '/downloads/mountains.jpeg'))
});

app.get('/about', function (req, res) {
  res.redirect('/about.html');
});

app.post('/subscribe', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  console.log(`${name} has subscribed with ${email}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});




