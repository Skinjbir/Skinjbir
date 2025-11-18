const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Hello From console");
    res.send('Hello, DevSecOps!');
});

app.listen(3010, () => {
    console.log('Server running on port 3010');
});
