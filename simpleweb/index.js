const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});
/// when you visit this app, it will immediately show the msg of hi there

/// port number is set 8080, error msg()s
app.listen(8080, () => {
  console.log('Listening on port 8080');
});