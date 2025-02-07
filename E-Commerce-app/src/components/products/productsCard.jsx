import { Box, Button, Card, Rating, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import useGetProduct from '../hooks/useGetProductsFile';


const ProductCards = () => {
    
  const {products} = useGetProduct()


return(

<>

<Grid container spacing={2}>

{products?.map((product)=> {
    return <>
<Grid size={{ xs: 6, md: 3 }}>
<Card className="p-3">

    
    <Box className="text-center">
        <img src={product?.image}
       style={{
           width:"200px",
           height:"200px",
           objectFit:"contain"
        }} 
        alt="" />
    </Box>
    <span>{product?.category}</span>

    <Typography variant="h5">
        <Tooltip title={product?.title} placement="top">

{product?.title?.length > 25 
? product?.title.slice(0,25) + "..."
: product?.title}
</Tooltip>
    </Typography>

 <Rating name="read-only" value={product?.rating?.rate} readOnly />
 <Box className="d-flex justify-content-between">
<span className="fw-bold fs-5">{product?.price}</span>
<Button variant="contained" size="small">+Add</Button>

 </Box>
        </Card>

</Grid>

    </>


})}


</Grid>

</>

);

};

export default ProductCards;
