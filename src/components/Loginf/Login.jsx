import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { SignupSchema } from "./SignupSchema";
import { Link, useNavigate } from "react-router-dom";

const Formdiv = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`;
const Inputfield = styled(TextField)`
  width: 50%;
  margin: auto;
  margin-top: 20px;
`;

const Submitbtn = styled(Button)`
  width: 50%;
  margin: auto;
  margin-top: 20px;
`;

const Container = styled(Box)`
  padding-top: 50px;
`;
const Heading = styled(Typography)`
  text-align: center;
`;

const initialValues = {
  name: "",
  email: "",
  mobile_no: "",
  city: "",
  pan: "",
  button:null
};

const Login = () => {
  const navigate=useNavigate();
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        navigate("/verify")
      },
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formdiv>
          <Heading component="h1">Login Form!!</Heading>
          <Inputfield
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            name="name"
            type="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <Box component="span" style={{ color: "red", fontSize: "10px" }}>
              {errors.name}
            </Box>
          ) : null}
          <Inputfield
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <Box component="span" style={{ color: "red", fontSize: "10px" }}>
              {errors.email}
            </Box>
          ) : null}
          <Inputfield
            id="outlined-basic"
            label="Mobile No."
            variant="outlined"
            name="mobile_no"
            type="mobile_no"
            autoComplete="off"
            value={values.mobile_no}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobile_no && touched.mobile_no ? (
            <Box component="span" style={{ color: "red", fontSize: "10px" }}>
              {errors.mobile_no}
            </Box>
          ) : null}
          <Inputfield
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            type="city"
            autoComplete="off"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.city && touched.city ? (
            <Box component="span" style={{ color: "red", fontSize: "10px" }}>
              {errors.city}
            </Box>
          ) : null}
          <Inputfield
            id="outlined-basic"
            label="Pan Number"
            variant="outlined"
            name="pan"
            type="pan"
            autoComplete="off"
            value={values.pan}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.pan && touched.pan ? (
            <Box component="span" style={{ color: "red", fontSize: "10px" }}>
              {errors.pan}
            </Box>
          ) : null}
          <Submitbtn variant="outlined" type="submit">LOG IN</Submitbtn>
        </Formdiv>
      </form>
    </Container>
  );
};

export default Login;
