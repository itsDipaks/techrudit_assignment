  

  import {
    Box,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
  } from "@mui/material";
  import React from "react";
  
  const InputField = ({
    value,
    onChange,
    onBlur,
    onFocus,
    name,
    label,
    placeholder,
    errors,
    touched,
    isnum,
  }) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: "5px",
          paddingX: "10px",
          width: "100%",
        }}
      >
        <InputLabel
          sx={{
            fontSize: "14px",
            color: "rgba(14, 0, 0, 1)",
            marginBottom: "4px",
          }}
        >
          {label}
        </InputLabel>
  
        <TextField
          type={isnum ? "number" : "text"}
          autoComplete="off"
          id="outlined-basic"
          // disabled={ ? true : false}
          sx={{
            borderRadius: "15px",
            bgcolor: "rgba(255, 241, 241, 1)",
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "15px",
              borderColor: "#BFBFBF",
              "& .Mui-disabled": {
                borderColor: "#BFBFBF",
              },
            },
  
            "& .MuiOutlinedInput-root": {
              "& .Mui-disabled": {
                borderColor: "#BFBFBF",
              },
              "& fieldset": {
                borderRadius: "15px",
                borderColor: "#BFBFBF",
                "& .Mui-disabled": {
                  borderColor: "#BFBFBF",
                },
              },
              "&:hover fieldset": {
                borderColor: "1px solid #BFBFBF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "1px solid #BFBFBF",
                borderWidth: "2px",
              },
              "& input": {
                borderRadius: "15px",
                bgcolor: "#FFFFFF",
                padding: "14px",
                fontSize: "1rem",
                color: "black",
                textOverflow: "ellipsis !important",
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "black",
                  fontWeight: "500",
                },
              },
            },
          }}
          name={name}
          variant="outlined"
          value={value}
          onChange={onChange ?? null}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        // InputProps={{
        //     endAdornment: actioMode == "edit" && ( // Show edit icon only if isedit is true
        //         <InputAdornment position="end">
        //             <IconButton edge="end">
        //                 {/* <img src={editicon} alt="Edit" /> */}
        //             </IconButton>
        //         </InputAdornment>
        //     ),
        // }}
        />
        <Box
          sx={{
            fontSize: "12px",
            color: "red",
            height: "15px",
            mb: "3px",
            pl: "7px",
          }}
        >
          {touched[name] && errors[name] && errors[name]}
        </Box>
      </Box>
    );
  };
  
  export default InputField;