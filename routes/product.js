const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');

productCtrl = new ProductController();

router.get ("/", async (req, res) => {
    let result = await productCtrl.getProducts(req.query);
    res.send({result})
});

router.get ("/:id", async (req, res) => {
    let result = await productCtrl.getProduct(req.params.id);
    res.send({result})
});

router.post ("/:id", async (req, res) => {
    res.send({})
});

router.put ("/:id", async (req, res) => {
    res.send({})
});

router.patch ("/:id", async (req, res) => {
    res.send({})
});

router.delete ("/:id", async (req, res) => {
    res.send({})
});

module.exports = router;