import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  // MDBInput,
  // MDBIcon,
  // MDBCheckbox
}
from 'mdb-react-ui-kit';
import './FbIntegration.css'
// import { Link } from 'react-router-dom';

function FbIntegration() {
  return (
    <MDBContainer fluid> 

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '550px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Facebook Page Integration</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>


              <MDBBtn size='lg'>
                Connect Page
              </MDBBtn>
              {/* <p className='mt-4 text-center'>New to MyApp? <span><Link to="/">Sign Up </Link></span></p> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default FbIntegration