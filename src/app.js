const express = require("express");
const hanblebars = require("express-handlebars");
const path = require('path');
const apiRouter = require("./routes/app.routes");
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const productsModel = require('./models/products/products.models');
const cartProductsModel = require('./models/cart/cart.models');
const { Router } = require('express');
const router = Router();
const util = require('util');

const PORT = process.env.PORT || 8080;
const app = express();

app.engine("handlebars", hanblebars.engine());
app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));

app.use("/", apiRouter);

const httpServer = app.listen(PORT, () => {
    console.log("server running in port", PORT);
});

mongoose.set('strictQuery', false);

const database = 'ecommerce';

mongoose.connect(`mongodb://localhost:27017/${database}`, (error) => {
    console.log('Connected to database ', database);
    if (error) {
        console.log("Cannot connect to database: " + error);
        process.exit();
    }
});

const io = new Server(httpServer);

io.on('connection', (socket) => {
    socket.on('product', async (cartProduct) => {
        console.log(cartProduct.id);
    });
});

router.get('/cart', async (req, res) => {

});