import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box className="flex justify-between ">
      <AppBar position="fixed" className="w-full bg-orange-500 h-16 ">
        <Toolbar className="flex justify-between bg-orange-500">
          <Typography
            component="div"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            NearBuy
          </Typography>

          <div className="flex  justify-end gap-4 items-center" >
           <Link to="/home" className=" text-white !text-white ">Home</Link>
            <Link to="/about-us" className="!text-white">About us</Link>
            <Link to="condact-us" className="!text-white">Condact us</Link>

            <Button
              sx={{
                backgroundColor: "#166534",
                "&:hover": { backgroundColor: "#14532d" },
                color: "white",
              }}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
