const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
