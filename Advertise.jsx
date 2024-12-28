

import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";

const MobileAppSection = () => {
  return (
    <Box sx={{ padding: "30px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        APPLY TO JOBS ON-THE-GO
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        Jobringer Mobile App
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", mb: 3 }}>
        <img
          src="https://via.placeholder.com/150x50?text=Google+Play"
          alt="Google Play"
          style={{ cursor: "pointer" }}
        />
        <img
          src="https://via.placeholder.com/150x50?text=App+Store"
          alt="App Store"
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Link href="#" underline="hover" color="primary" fontSize="1.2rem">
        Mobile App Download
      </Link>
    </Box>
  );
};

export default MobileAppSection;
