import React from 'react'
import * as Yup from 'yup'

const pat = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
export const SignupSchema = Yup.object({
    
    name:Yup.string().min(5).max(40).required("Please Enter Your FullName"),
    email: Yup.string().email().required("Please enter Your Email"),
    mobile_no:Yup.string().min(10).required("Please Enter Your Mobile Number"),
    city:Yup.string().min(2).max(15).required("Please Enter Your City"),
    pan:Yup.string().matches(pat,"Enter your valid Pan Number").min(10).required("Please Enter Pan Number"),
})

export const Otpschema = Yup.object({
    otp:Yup.string().min(6).required("Please Enter Otp"),
    otp1:Yup.string().min(6).required("Please Enter Otp")
})