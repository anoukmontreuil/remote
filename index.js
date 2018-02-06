const express = require('express');
const app = express();
const port = 1011;

app.get('/', (req, res) => {
    res.send(`
    <h2>Question 2: Solved!</h2>
    `);
});

app.listen(port, () => console.log(`App listening on port ${port}`));