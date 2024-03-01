'use client'
import ProductForm from "@/components/ProductForm/ProductForm";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const EditProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            console.log(result);
            setProduct(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateProducto = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/productos/${id}`, data);
            const result = await response.data;
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getProducto();
    }, [])

    return (
        <main>
            {
                product !== null &&
                <ProductForm
                    priceInital={product.price}
                    titleInitial={product.title}
                    descriptionInitial={product.description}
                    onSubmitFn={handleUpdateProducto}
                    btnLabel="Editar"
                    clearStates={false}
                />
            }

        </main>
    )
}

export default EditProductPage;