'use client'

import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Fragment, useState, useEffect } = require("react")




const ProductosPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/productos");
            const result = await response.data;
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = (id) => async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            console.log(result);
            /* Actualizacion del estado */
            /* setProducts((prevVal) => {
                const newList = prevVal.filter((item) => item._id !== id);
                console.log(newList);
                return ([...newList]);
            }); */
            getProducts();

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <main>
            <h1>Productos Disponibles</h1>
            <ul style={{ marginLeft: 24 }}>
                {
                    products.map((item, idx) => {
                        return (
                            <li key={idx} style={{ marginBottom: 8 }}>
                                <div style={{ display: "flex", columnGap: 8, alignItems: "center" }}>
                                    <h3>
                                        <Link href={`/products/${item._id}`}>{item.title}</Link>
                                    </h3>
                                    <Button variant="contained" color="info" size="small"> <Link href={`/products/${item._id}/edit`}>EDIT</Link></Button>
                                    <Button variant="contained" color="error" size="small" onClick={deleteProduct(item._id)} >Eliminar</Button>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default ProductosPage;