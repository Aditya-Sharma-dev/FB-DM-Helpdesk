import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("https://fb-dm-helpdesk-two.vercel.app/login", {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json', // Example header
        }
      });
      console.log(response.data);

      history("/fb", { state: { id: email } });
    } catch {
      console.error("Error:", error.response.data.message);
      setError(error.response.data.message || "An error occured");
    }
  }

  return (
    <MDBContainer fluid>
      <form action="">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">
                  Login to your account
                </h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                {/* <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/> */}
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Email"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember Me"
                />

                <MDBBtn size="lg" onClick={submit}>
                  Login
                </MDBBtn>
                <p className="mt-4 text-center">
                  New to MyApp?{" "}
                  <span>
                    <Link to="/">Sign Up </Link>
                  </span>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Login;
