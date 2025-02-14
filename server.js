const express = require('express');
const app = express();
const port = 4000;

// Example of a merged section
// <<<<<<< HEAD
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// =======
app.get('/status', (req, res) => {
    res.send('Server is running.');
});
// >>>>>>> branch-name

// Ensure both features are preserved
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    res.send('Server is running.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});