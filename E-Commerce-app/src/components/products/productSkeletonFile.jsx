import { Box, Grid2, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid2';


const ProductSkeletonFileComponent = () => {


    return(

<>


<Box sx={{flexGrow: 1}}>


<Grid container spacing={3}>

{/* One */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* two */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* three */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* four  */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>


</Grid>

<Grid container spacing={3}>

{/* five */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* six */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* seven */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>

{/* eight  */}
<Grid size={{ md: 3 }}>

<Skeleton variant="rectangle" width={230} height={230} />
<Skeleton variant="text" width={230} height={40} />
<Skeleton variant="text" width={230} height={50} />
<Skeleton variant="rounded" width={230} height={20} />

</Grid>


</Grid>

</Box>
</>

    );

};

export default ProductSkeletonFileComponent;
