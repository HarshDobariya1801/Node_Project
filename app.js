

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Use the middleware
app.use(loggerMiddleware);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Myself Harsh!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
