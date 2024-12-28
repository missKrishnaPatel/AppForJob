
import react from 'react';
import {AppBar,Toolbar, Typography, Button, Box, Link} from "@mui/material";



const Navbar = ()=>{

    return(
           <AppBar position='static' sx={{background:"linear-gradient(to right,rgb(128, 226, 216),rgb(6, 77, 135))",margin:'10px',borderRadius:"20px"}} elevation={4}>
             <Toolbar>
             <Typography variant='h6' component="div" sx={{flexGrow:1}}><span style={{fontWeight:'bold'}}>EMPLOYERS</span></Typography>
               <Typography variant='h6' component="div" sx={{flexGrow:1}}>Welcome Offer : <span style={{fontWeight:'bold'}}>Free Job Postings</span></Typography>
               <Box sx={{display:"flex",gap:2}}>
                   <Button style={{background:'yellow',color:"black"}} href='/' variant='contained' sx={{textTransform:"none"}}>Post a Job</Button>
                   <Button style={{background:'white',color:'black'}} href='/' variant='contained' sx={{textTransform:"none"}}>Register for free</Button>
                   <Button color='default' href='/'  sx={{textTransform:"none"}}>Sales Enquiry</Button>
               </Box>           
             </Toolbar>
           </AppBar>
    )
}

export default Navbar;









