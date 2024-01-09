const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/1.html');
});

app.get('/data', (req, res) => {
    // Générez des données factices pour l'exemple
    const timestamp = new Date().getTime();
    const value = Math.random() * 100;
    res.json({ timestamp, value });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
