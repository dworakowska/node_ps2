const express = require('express');
const app = express();

app.get('/', (err, res) => {
    res.status(200);
    res.json({ working: true });
    res.end();
});