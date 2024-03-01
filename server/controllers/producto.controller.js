const Producto = require("../models/producto.model");



module.exports.findAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200);
        res.json(productos);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.findProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({ _id: req.params.id });
        if (producto) {
            res.status(200);
            res.json(producto);
            return;
        }
        res.status(404);
        res.json({ error: "Producto not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.createProducto = async (req, res) => {
    try {
        const newProducto = await Producto.create(req.body);
        res.status(201);
        res.json(newProducto);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.updateProducto = async (req, res) => {
    try {
        const updatedProducto = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updatedProducto);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.deleteProducto = async (req, res) => {
    try {
        const deletedProducto = await Producto.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedProducto);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};