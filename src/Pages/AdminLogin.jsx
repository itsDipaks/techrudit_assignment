import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../Api/Config";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      enableReinitialize: true,
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      }),
      onSubmit: async (values) => {
        setloading(true);
        const data = await axios.post(`${baseURL}/auth/admin_login`, {
          email: values.email,
          password: values.password,
        });
        if (data?.data?.success) {
          setloading(false);
          toast.success("Admin login Sucessfully !");
          navigate("/home");
        } else {
          setloading(false);
          toast.error(data?.data?.message);
        }
      },
    });
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: 500,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Admin Login
        </Typography>

        <FormControl fullWidth>
          <Typography sx={{ textAlign: "start" }} variant="p" mb={0.5}>
            Email
          </Typography>
          <TextField
            onChange={handleChange}
            value={values?.email}
            size="medium"
            name="email"
            placeholder="Enter your email"
            sx={{ bgcolor: "#fff" }}
          />
          <Box
            sx={{
              fontSize: "12px",
              color: "red",
              height: "15px",
              mb: "3px",
              pl: "7px",
              textAlign: "start",
            }}
          >
            {touched.email && errors.email}
          </Box>
        </FormControl>

        <FormControl fullWidth>
          <Typography sx={{ textAlign: "start" }} variant="p" mb={0.5}>
            Password
          </Typography>
          <TextField
            onChange={handleChange}
            value={values?.password}
            name="password"
            size="medium"
            type="password"
            placeholder="Enter your password"
            sx={{ bgcolor: "#fff" }}
          />

          <Box
            sx={{
              fontSize: "12px",
              color: "red",
              height: "15px",
              mb: "3px",
              pl: "7px",
              textAlign: "start",
            }}
          >
            {touched.password && errors.password}
          </Box>
        </FormControl>

        <Button
          disabled={loading}
          onClick={handleSubmit}
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            bgcolor: "red",
            p: 1,
            width: "40%",
            textAlign: "center",
            m: "auto",
            height: "50px",
          }}
        >
          {loading ? <CircularProgress /> : <Typography>Login</Typography>}
        </Button>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "10px" }}
        >
          <Link to={"/registercustomer"}>
            <Typography>Register Customer </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
