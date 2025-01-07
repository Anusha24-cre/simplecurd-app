const express = require('express');
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct} = require('../controllers/product.controller.js');

router.get('/',getProducts);

router.get('/:id',getProducts);

router.post('/',  createProduct);

//Upadte a product
router.put('/:id', updateProduct);

//delete a product

module.exports = router;
router.delete('/:id', deleteProduct);