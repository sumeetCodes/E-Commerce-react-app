import axios from "axios";
import { useEffect, useState } from "react";


const useGetProduct = () => {

const [products, setProducts] = useState([])    

useEffect(()=> {
const getProduct = async () => {

    const products = await axios.get("https://fakestoreapi.com/products");
    setProducts(products?.data,"products");

}
getProduct()
    
  })


return {products}
};


export default useGetProduct;

