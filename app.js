'use strict';
const express = require('express');
const path = require('path');
const app = express();

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

app.listen(3000, () => {
  console.log('Server started on port 3000');
});




