const express = require("express");
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const categoryCtrl = new CategoryController();

router.get ("/", async (req, res) => {
    const result = await categoryCtrl.getCategories;
    res.send(result);
});

router.get ("/:id", async (req, res) => {
    const result = await categoryCtrl.getCategory(req.params.id);
    res.send(result);
});

module.exports = router;