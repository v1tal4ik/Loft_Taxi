const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, './build')));



app.use((req, res, next) => {
    res.status(404).json({
        err: '404',
        message: '404- page not found',
    });
});

app.use((err, req, res) => {
    res.status(500).json({
        err: '500',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});