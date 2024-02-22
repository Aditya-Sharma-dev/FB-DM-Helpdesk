import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import icon from "../assets/icon.png";
import { Row } from "reactstrap";
import "./styles.modules.css";
// import richPanelIcon from '../../assets/images/richPanelIcon.png';
// import dashBoardIcon from '../../assets/images/dashBoardIcon.jpeg';
// import profileIcon from '../../assets/images/profileIcon.png';
// import tradingIcon from '../../assets/images/tradingGraphIcon.png';
import customerIcon from '../assets/icon.png'
import rich from '../assets/icon.png'
import trade3 from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUserGroup } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    // <MDBRow>
    //   <div className="containers" style={{ background: "blue" }}>
    //     <MDBRow>
    //       {/* <img className="navIcon" src={rich} /> */}
    //     </MDBRow>
    //     <MDBRow>
    //       <MDBIcon fas icon="inbox" className='ms-1'    size='3x'  />
    //     </MDBRow>
    //     <MDBRow>
    //       <MDBIcon fas icon="users" />
    //     </MDBRow>
    //     <MDBRow>
    //       <MDBIcon fas icon="chart-line" />
    //     </MDBRow>
    //     {/* <Row style={{marginTop:"400px"}}>
    //       <img style={{borderRadius:"50%",paddingBottom:"5px"}} className='navIcon' src = {customerIcon} />
    //    </Row> */}
    //   </div>
    // </MDBRow>

    // <MDBContainer style={{ background: "blue", height: "45rem" }}>
    //   <MDBCol size="3" className="" style={{ padding: "6px", marginTop: "" }}>
    //     {/* <MDBRow> */}
    //     <img
    //       src={icon}
    //       alt=""
    //       style={{
    //         width: "70px !important",
    //         height: "40px",
    //       }}
    //     />
    //     {/* </MDBRow> */}
    //   </MDBCol>
    //   <MDBCol
    //     size="3"
    //     className=""
    //     style={{ padding: "6px", marginTop: "5px" }}
    //   >
    //     <a href="">
    //       <MDBIcon
    //         fas
    //         icon="inbox"
    //         className=""
    //         size="2x"
    //         style={{ color: "white" }}
    //         fixed
    //         iconType="solid"
    //       />
    //     </a>
    //   </MDBCol>
    //   <MDBCol
    //     size="3"
    //     className=""
    //     style={{ padding: "6px", marginTop: "5px" }}
    //   >
    //     <a href="">
    //       <MDBIcon fas icon="users" className="" size="2x" style={{ color: "white" }}/>
    //     </a>
    //   </MDBCol>
    //   <MDBCol
    //     size="3"
    //     className=""
    //     style={{ padding: "6px", marginTop: "5px" }}
    //   >
    //     <a href="">
    //       <MDBIcon fas icon="chart-line" className="" size="2x" style={{ color: "white" }}/>
    //     </a>
    //   </MDBCol>
    // </MDBContainer>

    <div className='containers' style={{background:"rgba(15,78,151,255)"}}>
       <Row>
          <img className = 'navIcon' src={rich} />
       </Row>
       <Row >
       <FontAwesomeIcon className='icon2'  icon={faEnvelope} />
       </Row>
       <Row>
       <FontAwesomeIcon className='icon3' icon={faUserGroup} />
       </Row>
       <Row>
       <img className = 'navIcon' src={trade3} />
       </Row>
       <Row style={{marginTop:"400px"}}>
          <img style={{borderRadius:"50%",paddingBottom:"5px"}} className='navIcon' src = {customerIcon} />
       </Row>
    </div>
    
  );
}

export default Navbar;
