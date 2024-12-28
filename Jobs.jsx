import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const JobsLocationSection = () => {
  const indiaJobs = ["Mumbai", "Delhi", "Ajmer", "Pune", "Hyderabad", "Agra", "Chennai", "Kolkata", "Indore"];
  const internationalJobs = ["Africa", "USA", "UK", "Australia", "Canada", "Singapore", "Dubai"];

  return (
    <Box sx={{ padding: "30px", textAlign: "center", backgroundColor: "#ffffff" }}>
      <Grid container spacing={4}>
        {/* Jobs in India */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            JOBS IN INDIA
          </Typography>
          <Box>
            {indiaJobs.map((job, index) => (
              <Typography
                key={index}
                component="span"
                sx={{
                  margin: "0 10px",
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                #{job}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* International Jobs */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            INTERNATIONAL JOBS
          </Typography>
          <Box>
            {internationalJobs.map((job, index) => (
              <Typography
                key={index}
                component="span"
                sx={{
                  margin: "0 10px",
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                #{job}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobsLocationSection;
