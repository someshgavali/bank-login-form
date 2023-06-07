import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Otpschema } from "../Loginf/SignupSchema";

const Formdiv = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
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
const Valbox = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

const Heading = styled(Typography)`
  text-align: center;
`;
const initialValues = {
  otp: "",
  otp1: "",
};

const Login = () => {
  const [Otpvalue, Setotpvalue] = useState();
  useEffect(() => {
    Setotpvalue(() => {
      setTimeout(() => {
        var num = Math.random() * 1000000;
        var otpval = Math.round(num);
        console.log(otpval);
      }, 3000);
    });
  }, [Otpvalue]);


  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Otpschema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formdiv>
          <Heading component="h1">Verification!!</Heading>
          <Inputfield
            id="outlined-basic"
            label="Mobile Otp"
            variant="outlined"
            name="otp"
            type="password"
            autoComplete="off"
            value={values.otp}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Valbox>
            {" "}
            <a href="#" onClick={Setotpvalue}>Resend OTP</a>
            {errors.otp && touched.otp ? (
              <Box component="span" style={{ color: "red", fontSize: "10px" }}>
                {errors.otp}
              </Box>
            ) : null}
          </Valbox>
          <Inputfield
            id="outlined-basic"
            label="Email Otp"
            variant="outlined"
            name="otp1"
            type="password"
            autoComplete="off"
            value={values.otp1}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Valbox>
            {" "}
            <a href="#" onClick={Setotpvalue}>Resend OTP</a>
            {errors.otp1 && touched.otp1 ? (
              <Box component="span" style={{ color: "red", fontSize: "10px" }}>
                {errors.otp1}
              </Box>
            ) : null}
          </Valbox>
          <Submitbtn variant="outlined" type="submit">
            Submit
          </Submitbtn>
        </Formdiv>
      </form>
    </Container>
  );
};

export default Login;
