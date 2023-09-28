const express = require('express');
const app = express();
const port = 7861;
const start = require('./app');

app.get('/message', async (req, res) => {
    const prompt = req.query.prompt;
    const message = await start(prompt);
    res.send(message);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});