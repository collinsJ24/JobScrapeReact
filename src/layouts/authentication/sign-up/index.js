import "Login.css";
import { useState } from "react";
// react-router-dom components
import { Link, Navigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {

   //For Job Site dropdown
   const [selectedOption, setSelectedOption] = useState([]);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [success, setSuccess] = useState(false);
   // Handling the form submission
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: name, email: email, password: password})
};

// Handling the name change
const handleName = (e) => {
  setName(e.target.value);
};

const handleEmail = (e) => {
  setEmail(e.target.value);
};

const handlePassword = (e) => {
  setPassword(e.target.value);
};

  const handleSubmit = () => {
    localStorage.setItem('user', email)
      fetch("http://localhost:8080/api/auth/signup/", requestOptions)
        .then((response) => response.json())
        .then(setSuccess(true)
        );
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <input
                placeholder="Name"
                onChange={handleName}
                className="input form-control"
                type="text"
                label="name"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <input
                placeholder="Email"
                onChange={handleEmail}
                className="input form-control"
                type="text"
                label="email"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <input
                placeholder="Password"
                onChange={handlePassword}
                type="password"
                className="input form-control"
                label="password"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="button-7"
                  variant="gradient"
                  color="info"
                  fullWidth
                >
                  Sign Up
                </button>
              </div>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {success && <Navigate to="/dashboard"/>}
    </CoverLayout>
  );
}

export default Cover;
