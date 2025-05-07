import React from "react";
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
const CustomerRegistration = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const data = await axios.post(`${baseURL}/auth/register`, {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        role: "user",
      });

      if (data?.data?.success) {
        console.log(data?.data, "data response get ");
        toast.success("User Registred Sucessfully !");
        navigate("/verifiyemail", {
          state: {
            ...data?.data?.data,
          },
        });
        resetForm();
      } else {
        toast.error(data?.data?.message);
      }
    },
  });
  return (
    <Box
      sx={{
        height: "85vh",
        bgcolor: "#0D3881",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 450,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" mb={4} fontWeight="bold" textAlign="center">
          Customer Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography
              sx={{ textAlign: "start" }}
              variant="subtitle2"
              mb={0.5}
            >
              First Name
            </Typography>
            <TextField
              size="small"
              placeholder="Enter First Name "
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box
              sx={{
                fontSize: "12px",
                color: "red",
                mt: "7px",
                textAlign: "start",
              }}
            >
              {touched.first_name && errors.first_name}
            </Box>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography
              sx={{ textAlign: "start" }}
              variant="subtitle2"
              mb={0.5}
            >
              Last Name
            </Typography>
            <TextField
              size="small"
              placeholder="Enter Last Name"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box
              sx={{
                fontSize: "12px",
                color: "red",
                mt: "7px",
                textAlign: "start",
              }}
            >
              {touched.last_name && errors.last_name}
            </Box>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography
              sx={{ textAlign: "start" }}
              variant="subtitle2"
              mb={0.5}
            >
              Email
            </Typography>
            <TextField
              size="small"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box
              sx={{
                fontSize: "12px",
                color: "red",
                mt: "7px",
                textAlign: "start",
              }}
            >
              {touched.email && errors.email}
            </Box>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <Typography
              sx={{ textAlign: "start" }}
              variant="subtitle2"
              mb={0.5}
            >
              Password
            </Typography>
            <TextField
              size="small"
              type="password"
              placeholder="Enter password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box
              sx={{
                fontSize: "12px",
                color: "red",
                mt: "7px",
                textAlign: "start",
              }}
            >
              {touched.password && errors.password}
            </Box>
          </FormControl>

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              bgcolor: "#1976d2",
              p: 1,
              width: "40%",
              textAlign: "center",
              m: "auto",
              height: "50px",
            }}
          >
            {isSubmitting ? (
              <CircularProgress />
            ) : (
              <Typography>Register</Typography>
            )}
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Link to={"/"}>
              <Typography>Login </Typography>
            </Link>
            <Link to={"/registeradmin"}>
              <Typography>Register Admin </Typography>
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default CustomerRegistration;
