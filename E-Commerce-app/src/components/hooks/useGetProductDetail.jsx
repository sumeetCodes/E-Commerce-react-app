
import axios from "axios";
import { useEffect, useState } from "react";


const useGetProductDetail = (product_id) => {


const [products, setProducts] = useState({})    
const [loading, setLoading] = useState(true);

useEffect(()=> {
const getProduct = async () => {

    const products = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
    setProducts(products?.data,"products");
setLoading(false);

}
getProduct()
    
  })


return {products,loading}
};


export default useGetProductDetail;
