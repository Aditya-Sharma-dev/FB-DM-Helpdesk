import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./FbIntegration.css";
import { FacebookProvider, LoginButton } from "react-facebook";
import { useNavigate } from "react-router-dom";

function FbIntegration() {
  const history = useNavigate();

  function handleSuccess(response) {
    history("/confirmation");
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "550px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">
                Facebook Page Integration
              </h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>
              <FacebookProvider appId="1836900123429517">
                <LoginButton
                  scope="email"
                  onError={handleError}
                  onSuccess={handleSuccess}
                  style={{
                    backgroundColor: "#425cf0",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Connect Page
                </LoginButton>
              </FacebookProvider>
              {/* <MDBBtn size="lg">Connect Page</MDBBtn> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FbIntegration;
