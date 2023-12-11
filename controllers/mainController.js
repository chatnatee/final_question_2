import express from 'express';
import bodyParser from 'body-parser';
import { getAllCars } from '../models/cars';
import { getAllFlowers } from '../models/flowers';
import { getAllTrees } from '../models/trees';

const app = express();

app.use(bodyParser.json());

app.get('/cars', (_, res) => {
    res.json(getAllCars());
});

app.get('/flowers', (_, res) => {
    res.json(getAllFlowers());
});

app.get('/trees', (_, res) => {
    res.json(getAllTrees());
});

const mainController = app;

export default mainController;
