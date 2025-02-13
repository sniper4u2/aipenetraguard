const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/start-c2', (req, res) => {
  res.send('C2 server started...\n');
  // Add logic to start the C2 server
});

app.get('/stop-c2', (req, res) => {
  res.send('C2 server stopped...\n');
  // Add logic to stop the C2 server
});

app.get('/view-logs', (req, res) => {
  res.send('Fetching logs...\n');
  // Add logic to fetch logs
});

app.get('/manage-users', (req, res) => {
  res.send('Managing users...\n');
  // Add logic to manage users
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});