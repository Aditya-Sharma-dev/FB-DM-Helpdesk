import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  // MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Login.css'
import { Link } from 'react-router-dom';
// import {useHistory} from 'react-router-dom'

function Login() {
    // const history = useHistory();
   
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Login to your account</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              {/* <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/> */}
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember Me' />

              <MDBBtn size='lg'>
                Login
              </MDBBtn>
              <p className='mt-4 text-center'>New to MyApp? <span><Link to="/">Sign Up </Link></span></p>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;