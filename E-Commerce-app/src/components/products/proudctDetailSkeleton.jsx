
import { Box, Grid2, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid2';


const ProductDetailsSkeleton = () => {


    return(

<>



<Box sx={{flexGrow: 1}}>


<Grid container spacing={3}>


<Grid size={{ md: 6 }}>

<Skeleton variant="rectangle" width={300} height={300} />

</Grid>

{/* two */}
<Grid size={{ md: 6 }}>

<Skeleton variant="text" width={300} height={80} />
<Skeleton variant="text" width={130} height={30} />
<Skeleton variant="text" width={80} height={40} />
<Skeleton variant="rectangle" width={500} height={150} />
<Skeleton variant="text" width={150} height={40} />
</Grid>


</Grid>


</Box>
</>

    );

};

export default ProductDetailsSkeleton;


