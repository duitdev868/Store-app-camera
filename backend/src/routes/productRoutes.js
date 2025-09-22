const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// API: Lấy tất cả sản phẩm
router.get('/', getProducts);

// API: Lấy chi tiết sản phẩm theo ID
router.get('/:id', getProductById);

module.exports = router;
