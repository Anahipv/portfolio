const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/dist/portfolio'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

app.listen(process.env.PORT || 5000);