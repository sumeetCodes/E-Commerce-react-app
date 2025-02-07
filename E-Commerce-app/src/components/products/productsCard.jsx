import { Box, Button, Card, Pagination, Rating, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import useGetProduct from '../hooks/useGetProductsFile';
import ProductSkeletonFileComponent from './productSkeletonFile';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

const ProductCards = () => {
    const {products, loading} = useGetProduct()
    

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10
    const totalpage = Math.ceil(products.length / itemPerPage) ;
    
    

return(

<>

{loading ? ( <ProductSkeletonFileComponent /> 
) :(

    <>
    
    <Grid container spacing={2}>

{products.slice((currentPage - 1) * itemPerPage, 
currentPage * itemPerPage
)?.map((product)=> {
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

<Link to={`/product-detail/${product?.id}`}>
<Button variant="text" size="small" className='mx-1'> <RemoveRedEyeIcon /> </Button>
</Link>
<Button variant="contained" size="small">+Add</Button>


 </Box>
        </Card>

</Grid>

    </>


})}


</Grid>

<Box className="my-4 d-flex justify-content-center">

<Pagination count={totalpage}
onChange={(e,value) => {setCurrentPage(value)}}
shape="rounded" />

</Box>

</>

)
}

</>

);

};

export default ProductCards;
