import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


export default function SignUpForm() {

    const navigate = useNavigate()

    const valid_mail="nearbuy@gmail.com";
    const valid_password = "nearBuy";
    const valid_confirm_password = "nearBuy";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
        formData.email === valid_mail &&
        formData.password === valid_password &&
        formData.confirmPassword === valid_confirm_password
    ){
        navigate("/home")
        console.log("logged successfully");
    }else{
        setError("invalid credentials")
    }
  };

  return (
    <Box className="bg-blue shadow-none"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper className="papper-shadow w-sm shadow-none">
      <Typography variant="h2"  className="text-orange-500 text-2xl font-bold mb-8 ">
          NearBuy
        </Typography>
        <Typography variant="h5" className="text-black text-xl mb-4 font-semibold">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
    
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            className="signup-btn"
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
