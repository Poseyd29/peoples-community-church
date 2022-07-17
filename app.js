const express = require('express');
const request = require('request');
const path = require('path');

const app = express();






// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5300;

app.listen(PORT, console.log(`server started on ${PORT}`));