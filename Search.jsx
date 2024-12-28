import react from "react";
import {Box, Typography, Grid, TextField , Button} from "@mui/material";



const Search = () =>{
    return(
            <div>
                <Box sx={{padding:"40px 20px",textAlign:"center"}}>

                    <Typography variant="h4" fontWeight="bold" mb={2}>Bringing You the Perfect Jobs!</Typography>

                    <Typography  variant="body1" mb={3}>Find your dream job from 11,000+ job listings</Typography>

                    <Grid  container spacing={2} justifyContent="center" flex="colomn">
                       <Grid item xs={12} sm={8} md={6} >
                          <Box sx={{backgroundColor:"rgb(128, 226, 216)", borderRadius:"8px", boxShadow:"0 4px 8px rgba(0,0,0,0.1)", padding:"20px", minHeight: "100px",}}>
                              <Typography variant="h6" fontWeight="Bold" mb={2}>Search Jobs Now</Typography>
                              <TextField fullWidth variant="outlined" placeholder="Enter Job Title" sx={{mb:2,backgroundColor:"rgb(234, 239, 238)"}}/>
                              <Button  variant="contained"  sx={{textTransform: "none", background:"white", color:"black", margin:"4px"}}>View Jobs</Button>
                              <Button variant="contained"  sx={{textTransform: "none", background:"yellow", color:"black", margin:"4px"}}>Register for Free</Button>
                         </Box>
                     </Grid>
                     <Grid  item xs={12} sm={8} md={5}>
                        <Box  sx={{backgroundColor:"rgb(128, 226, 216)", borderRadius:"8px", boxShadow:"0 4px 8px rgba(0,0,0,0.1)", padding:"20px"}}>
                          <Typography variant="h5">Quick Job Search</Typography>
                          <Typography sx={{color:"white"}}>#Fresher    #WorkFromHome   #WFH    #IT     #HR    #BackOffice    #BPO Jobs     #ITES     #Finance   #Accounts    #Medical   #Pharma     #Manager     #Developer     #Marketing    #Engineering     #NonGovernment Jobs</Typography>
                         
                        </Box>
                     </Grid>
                 </Grid>
             </Box>
        </div>
    )
}

export default Search;