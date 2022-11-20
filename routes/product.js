const express = require("express");
const router = express.Router();

router.get ("/", async (req, res) => {
    res.send("Olá mundo!!!")
});

router.get ("/:id", async (req, res) => {
    const result = userCtrl.getUsers();
    res.send(result);
});

//Cria um produto
// router.get ("/", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

//Edita um produto
// router.get ("/:id", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

//Deleta um produto
// router.get ("/:id", async (req, res) => {
//     const result = userCtrl.getUsers();
//     res.send(result);
// });

module.exports = router;