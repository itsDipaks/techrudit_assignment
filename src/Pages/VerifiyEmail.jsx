import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { baseURL } from "../Api/Config";
export const VerifiyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setloading] = useState(false);
  const SendVerifiyEmail = async () => {
    setloading(true);
    try {
      const { data } = await axios.post(
        `${baseURL}/auth/verifiyemail`,
        {
          email: location?.state?.email,
          Verification_code: otp,
        }
      );
      if (data?.success) {
        setloading(false);
        toast.success("User verified successfully!");
        localStorage.setItem("authInfo", JSON.stringify(data?.data));
        setOtp("");
        navigate("/home");
      } else {
        setloading(false);
        toast.error(data?.message || "Verification failed.");
      }
    } catch (error) {
      setloading(false);
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };
  return (
    <div>
      <Box
        sx={{
          height: "85vh",
          bgcolor: "#266DD3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,

            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              flexDirection: "column",
              mt: "1vh",
              // height: "90vh",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>
              Enter Verification Code Here,{" "}
            </Typography>
            <Box sx={{ width: "40vw" }}>
              <MuiOtpInput
                sx={{
                  fontSize: "25px",
                  "&.MuiOtpInput-TextField": {
                    fontSize: "20px",
                  },
                }}
                value={otp}
                length={6}
                onChange={(val) => setOtp(val)}
              />
            </Box>
            <Button
              disabled={loading}
              onClick={() => SendVerifiyEmail()}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                bgcolor: "#1976d2",
                p: 1,
                width: "40%",
                textAlign: "center",
                m: "auto",
                height: "50px",
                color: "#fff",
              }}
            >
              Verifiy{" "}
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
