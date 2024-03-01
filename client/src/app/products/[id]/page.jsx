'use client'
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";




const DetailProductPage = () => {

    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState({});

    const getProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            setProduct(result);
        } catch (error) {
            console.log(error);
        }

    }

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            console.log(result);
            router.push("/products");

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducto();
    }, [])

    return (
        <main>
            <h1>Detalles del Producto</h1>
            <h3>Titulo: {product.title}</h3>
            <h3>Precio: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <button onClick={deleteProduct} >Eliminar</button>
        </main>
    )
}

export default DetailProductPage;