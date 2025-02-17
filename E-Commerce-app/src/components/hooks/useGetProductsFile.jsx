import axios from "axios";
import { useEffect, useState } from "react";
import axiosService from "../../utils/axiosInerceptor/axiosService";


const useGetProduct = () => {

const [products, setProducts] = useState([])    
const [loading, setLoading] = useState(true);

useEffect(()=> {
const getProduct = async () => {

    const products = await axios.get("https://fakestoreapi.com/products");
    setProducts(products?.data,"products");
setLoading(false);

}
getProduct()

const passToken = async () => {
  const userProfile = await axiosService.get("/api/v1/auth/profile")
console.log(userProfile, "user profile");

}
   passToken() 
  },[])


return {products, loading}
};


export default useGetProduct;

