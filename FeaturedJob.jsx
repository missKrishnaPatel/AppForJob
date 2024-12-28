import { Button, Typography ,Grid ,Box ,Card , CardContent } from "@mui/material";



const FeaturedJobs = ()=>{
    const jobs = [
        {
            title: "Web Developer | Bengaluru",
            company: "Hindco Consulting Services",
            type:"Full Time",
            experience : "0-5 Years",
            location: "Bengaluru/India"
        },
        {
            title: "Cybersecurity",
            company: "VSVSystems",
            type:"Full Time",
            experience : "2-7 Years",
            location: "overland park/USA"
        },
        {
            title: "Java Developer | Bengaluru",
            company: "IDZ Digital Private Limited",
            type:"Full Time",
            experience : "0-5 Years",
            location: "Mumbai/India"
        },
        {
            title: "Game Designer",
            company: "Hindco Consulting Services",
            type:"Full Time",
            experience : "0-5 Years",
            location: "Bengaluru/India"
        },
    ];



    return(
        <Box sx={{padding:"10px", backgroundColor:"#f9f9f9"}}>
            <Typography color="primary" variant="h5" fontWeight="bold" mb={3} textAlign="center">Featured Jobs</Typography>

            <Grid container spacing={3} justifyContent="left"  >
            {
                    jobs.map((job, index)=>(
                <Grid item  xs={12} sm={6} md={3} key={index}>
                    <Card variant="outlined" sx={{background:"white"  , boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}>
                        <CardContent>
                            <Typography color="primary" variant="h6" gutterBottom>
                              {job.title}
                            </Typography >
                            <Typography variant="body2" gutterBottom color="text.secondary">
                            {job.company}
                            </Typography> 
                             <Typography  variant="body2" gutterBottom color="text.secondary">
                              {job.type}
                             </Typography>
                             <Typography  variant="body2" gutterBottom color="text.secondary">Experience:
                              {job.experience}
                                </Typography>
                                <Typography  variant="body2" gutterBottom color="text.secondary">
                                Location: {job.location}
                                </Typography>
                                <Button variant="contained" fullWidth sx={{marginTop:"10px", backgroundColor:"rgb(128, 226, 216)", color:"#fff", textTransform:"none"}}>
                                    Apply
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
};


export default FeaturedJobs;