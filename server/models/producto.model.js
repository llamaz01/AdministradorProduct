const mongoose = require("mongoose");



const ProductoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
}, { timestamps: true, versionKey: false })


const Producto = new mongoose.model("Producto", ProductoSchema);

module.exports = Producto;