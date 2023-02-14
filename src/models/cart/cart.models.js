const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const cartProductsCollection = 'cart';

const cartProductsSchema = new Schema({
    products: {
        type: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            }
        }],
        default: [],
        required: true
    }
});

cartProductsSchema.plugin(mongoosePaginate);
const cartProductsModel = mongoose.model(cartProductsCollection, cartProductsSchema);

module.exports = cartProductsModel;