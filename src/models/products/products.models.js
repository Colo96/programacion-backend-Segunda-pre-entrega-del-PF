const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productsCollection = 'products';

const productsSchema = new Schema({
    brand: {
        type: String,
    },
    model: {
        type: String,
    },
    ram: {
        type: String
    },
    memory: {
        type: String
    },
    price: {
        type: Number
    },
    colour: {
        type: String
    },
    image: {
        type: String
    },
});

productsSchema.plugin(mongoosePaginate);
const productsModel = mongoose.model(productsCollection, productsSchema);

module.exports = productsModel;