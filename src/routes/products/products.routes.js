const { Router } = require('express');
const productsModel = require('../../models/products/products.models');
const router = Router();
const util = require('util');

const addProducts = async () => {
    const response = await productsModel.insertMany([
        {
            brand: "Xiaomi",
            model: "Note 11T Pro",
            ram: "12GB",
            memory: "256GB",
            price: 344499,
            colour: "Gris Meteorito",
            image: "https://images.fravega.com/f500/e5716ef1bdaccf770b7dfd6fb5de79a6.jpg"
        },
        {
            brand: "Xiaomi",
            model: "Poco F4 Gt 5g",
            ram: "12GB",
            memory: "256GB",
            price: 428284,
            colour: "Silver",
            image: "https://images.fravega.com/f500/feceab03784de1b55eda6e1532c8c348.jpg"
        },
        {
            brand: "Xiaomi",
            model: "12x 5g",
            ram: "8GB",
            memory: "128GB",
            price: 412423,
            colour: "Gris",
            image: "https://images.fravega.com/f500/4a342286938057ca5cc8f762c7c7cef3.jpg"
        },
        {
            brand: "Samsung",
            model: "Galaxy Z Fold 4",
            ram: "12GB",
            memory: "256GB",
            price: 499999,
            colour: "Negro",
            image: "https://images.fravega.com/f500/117a974c34132536e73677d2273ddb68.jpg"
        },
        {
            brand: "Samsung",
            model: "Galaxy S23U",
            ram: "12GB",
            memory: "256GB",
            price: 459999,
            colour: "Crema",
            image: "https://images.fravega.com/f500/826d63429f0367cf3bd1b0f7069d6f72.jpg"
        },
        {
            brand: "Samsung",
            model: "Galaxy S23",
            ram: "12GB",
            memory: "512GB",
            price: 419999,
            colour: "Negro",
            image: "https://images.fravega.com/f500/4ea0e8ac4176819b4fd4fda6339197bd.jpg"
        },
        {
            brand: "Motorola",
            model: "Edge 30 Ultra",
            ram: "12GB",
            memory: "256GB",
            price: 279999,
            colour: "Negro Interestelar",
            image: "https://images.fravega.com/f500/158b16b31b1afc38b557b7c0ac8cd4c6.jpg"
        },
        {
            brand: "Motorola",
            model: "Moto G42",
            ram: "4GB",
            memory: "128GB",
            price: 100899,
            colour: "Rosa Metalico",
            image: "https://images.fravega.com/f500/217c1b315a7d02a9f691132d57c0ace6.jpg"
        },
        {
            brand: "Motorola",
            model: "Moto G52",
            ram: "6GB",
            memory: "128GB",
            price: 101699,
            colour: "Negro",
            image: "https://images.fravega.com/f500/ba55d94b09ee418d4f02f6473a84986e.jpg"
        },
        {
            brand: "Apple",
            model: "Iphone 13",
            ram: "4GB",
            memory: "256GB",
            price: 718999,
            colour: "Midnight",
            image: "https://images.fravega.com/f500/52e0c31ddd69d877db91db026fd05be3.jpg"
        },
        {
            brand: "Apple",
            model: "Iphone 13 Pro Max",
            ram: "6GB",
            memory: "256GB",
            price: 813999,
            colour: "Grafito",
            image: "https://images.fravega.com/f500/a1a64ed75c052721937cbe71e0b59eae.jpg"
        },
        {
            brand: "Apple",
            model: "Iphone 13 mini",
            ram: "4GB",
            memory: "128GB",
            price: 562999,
            colour: "Starlight",
            image: "https://images.fravega.com/f500/6668298e05c54d03cf981523104e3c33.jpg"
        },
        {
            brand: "Alcatel",
            model: "5H Plus",
            ram: "4GB",
            memory: "128GB",
            price: 77299,
            colour: "Negro",
            image: "https://images.fravega.com/f500/bae7e8b941482cfc9a25d1406a28bfac.jpg"
        },
        {
            brand: "Alcatel",
            model: "3H Plus",
            ram: "4GB",
            memory: "128GB",
            price: 56999,
            colour: "Gris",
            image: "https://images.fravega.com/f500/bd8946188acdc190400024f69e0b08c0.jpg"
        },
        {
            brand: "Noblex",
            model: "A60 4G",
            ram: "2GB",
            memory: "32GB",
            price: 43499,
            colour: "Negro",
            image: "https://images.fravega.com/f500/5dd28b0b1a8aacdc652e20ec842a066b.jpg"
        }
    ]);
    return response;
}

router.get('/', async (req, res) => {
    const products = await addProducts();
    const response = await productsModel.find();
    console.log(util.inspect(response, false, 20, true));
    res.json({
        status: 'success',
        payload: products
    });
});

//Abajo estan todos los GET que pide la consigna:

// router.get('/:pid', async (req, res) => {
//     const pid = req.params.pid;
//     const productFound = await productsModel.findOne({ "_id": pid });
//     res.json({
//         status: 'success',
//         payload: productFound
//     });
// });

// router.get('/:limit', async (req, res) => {
//     const limit = req.params.limit;
//     const products = await productsModel.find();
//     if (products.length = 0) {
//         return res.json({
//             status: "error",
//             error: "This collection is empty"
//         });
//     }
//     const response = await productsModel.paginate({ brand: 'Xiaomi' }, { limit: limit, page: 1 });
//     res.json({
//         status: 'success',
//         payload: response
//     });
// });

// router.get('/:page', async (req, res) => {
//     const page = req.params.page;
//     const products = await productsModel.find();
//     if (products.length = 0) {
//         return res.json({
//             status: "error",
//             error: "This collection is empty"
//         });
//     }
//     const response = await productsModel.paginate({ brand: 'Samsung' }, { limit: 1, page: page });
//     res.json({
//         status: 'success',
//         payload: response
//     });
// });

// router.get('/:orden', async (req, res) => {
//     let orden = parseInt(req.params.orden);
//     const response = await productsModel.aggregate([
//         {
//             $sort: {
//                 price: orden
//             }
//         },
//         {
//             $merge: {
//                 into: 'ascProducts'
//             }
//         }
//     ]);
//     res.json({
//         status: 'success',
//         payload: 'This collection is sorted by price'
//     });
// });

// router.get('/:orden', async (req, res) => {
//     let orden = parseInt(req.params.orden);
//     const response = await productsModel.aggregate([
//         {
//             $sort: {
//                 price: orden
//             }
//         },
//         {
//             $merge: {
//                 into: 'descProducts'
//             }
//         }
//     ]);
//     res.json({
//         status: 'success',
//         payload: 'This collection is sorted by price'
//     });
// });

router.post('/', async (req, res) => {
    let { brand, model, ram, memory, price, colour, image } = req.body;
    if (!brand || !model || !ram || !memory || !price || !colour || !image) {
        return res.json({
            status: "error",
            error: "Incomplete values"
        });
    }
    let result = await productsModel.create({
        brand,
        model,
        ram,
        memory,
        price,
        colour,
        image
    });
    res.json({
        status: "success",
        payload: result
    });
});

router.put('/:pid', async (req, res) => {
    let pid = req.params.pid;
    let productToReplace = req.body;
    if (!productToReplace.brand || !productToReplace.model || !productToReplace.ram || !productToReplace.memory || !productToReplace.price || !productToReplace.colour || !productToReplace.image) {
        return res.send({
            status: "error",
            error: "Incomplete values"
        });
    }
    let result = await productsModel.updateOne({ _id: pid }, productToReplace);
    res.send({
        status: "success",
        payload: result
    });
});

router.delete('/:pid', async (req, res) => {
    let pid = req.params.pid;
    let result = await productsModel.deleteOne({ _id: pid });
    res.send({
        status: "success",
        payload: result
    });
});

module.exports = router;