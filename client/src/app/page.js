'use client'
import styles from './page.module.css'
import axios from 'axios'
import ProductForm from '@/components/ProductForm/ProductForm';

export default function Home() {


  const handleCreateProducto = async (data) => {

    console.log(data);

    try {
      const response = await axios.post("http://localhost:8000/api/productos", data);
      const result = await response.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <main className={styles.main}>
      <ProductForm onSubmitFn={handleCreateProducto} btnLabel='Create' clearStates={true} />
    </main>
  )
}
