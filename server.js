const express = require('express');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cars', mainController.getAllCars);
app.get('/flowers', mainController.getAllFlowers);
app.get('/trees', mainController.getAllTrees);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

