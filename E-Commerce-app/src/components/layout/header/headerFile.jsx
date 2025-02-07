import { AppBar, Box, Button, Card, CssBaseline, IconButton, Rating, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MobileHeaderFileComponent from "./mobileHeader/mobileHeaderFile";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import ProductCards from "../../products/productsCard";



const navItems = ['Home', 'About', 'Contact'];

const HeaderFileComponent = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  
  const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
    

return(

<>

<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            E-Commerce Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <MobileHeaderFileComponent navItems={navItems} 
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen} />
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
<Box>


<ProductCards />

</Box>

      </Box>
    </Box>

</>

);

};



export default HeaderFileComponent;
