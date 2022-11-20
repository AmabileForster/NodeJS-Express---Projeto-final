const express = require("express");
const router = express.Router();
const User = require('../controllers/UserController')

const userCtrl = new User();

router.get ("/", async (req, res) => {
    const result = userCtrl.getUsers();
    res.send(result);
});

//Cria um usuario
// router.get ("/", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

//Edita um usuario
// router.get ("/:id", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

//Deleta um usuario
// router.get ("/:id", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

router.get ("/:id", async (req, res) => {
    const result = userCtrl.getUser(req.params.id);
    res.send(result);
});

module.exports = router;