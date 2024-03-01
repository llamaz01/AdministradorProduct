const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto.controller')

//Create
router.post("", productoController.createProducto);
//Find All
router.get("", productoController.findAllProductos);
//Find One
router.get("/:id", productoController.findProducto);
//Update One
router.put("/:id", productoController.updateProducto);
//Delete One
router.delete("/:id", productoController.deleteProducto);


module.exports = router;