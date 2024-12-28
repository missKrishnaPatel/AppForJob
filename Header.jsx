import react from "react";
// import {AppBar,Toolbar,Typography,Button,Box,Link} from "@mui/material";
import {AppBar,Toolbar,Typography,Button,Box,Link} from "@mui/material";

 

function Header() {
  return (
    <AppBar position="static" color="default" elevation={3}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" underline="none" color="primary" sx={{ fontWeight: "bold" }}>
            jobRinger
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
          <Button color="inherit" href="/">Jobs</Button>
          <Button color="inherit" href="/">Active Employers</Button>
          <Button color="inherit" href="/">Job Blogs</Button>
          <Button color="inherit" href="/">Pricing</Button>
          <Button color="inherit" href="/">Jobseeker Login</Button>
        </Box>

        {/* Employer Login and Register */}
        <Button color="warning" href="/" sx={{ mr: 1 }}>
          Employer Login
        </Button>
        <Button variant="contained" color="primary" href="/">
          Register for Free
        </Button>
      </Toolbar>
    </AppBar>
  );
}


export default Header;