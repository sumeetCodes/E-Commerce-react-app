import { useParams } from "react-router-dom";
import useGetProductDetail from "../hooks/useGetProductDetail";
import Grid from '@mui/material/Grid2';
import { Box, Rating, Typography } from "@mui/material";
import ProductDetailsSkeleton from "./proudctDetailSkeleton";


const ProductDetailsFileComponent = () => {
const {product_id} = useParams()
    const {products} = useGetProductDetail(product_id)
const{loading} = useGetProductDetail()
    

return(

<>

{loading ? (<ProductDetailsSkeleton /> ) : (

<> 

    <Grid container spacing={4}>

    <Grid size={{md:6}}>
    <img className="img-fluid w-75" 
    style={{width:"300px", height:"300px", objectFit:"contain"}}
    src={products?.image} alt="" />
    </Grid>

    <Grid size={{md:6}}>
    <Box className="p-2">
        <Typography variant='h4'>
    {products?.title}
        </Typography>
        <Typography className="my-2" variant='body1'>
    {products?.category}
        </Typography>
        <Typography variant='body1' className="fw-bold fs-4">
    {products?.price}
        </Typography>
        <Typography variant='body1' className="my-2">
    {products?.description}
        </Typography>
    <Rating name="read-only" value={products?.rating?.rate} readOnly />    

    </Box>
    </Grid>

    </Grid>


</>

)}


</>


);

};

export default ProductDetailsFileComponent;
