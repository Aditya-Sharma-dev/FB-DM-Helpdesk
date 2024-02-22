import React from "react";
import { Row } from "reactstrap";
import "./styles.modules.css";
import customerIcon from "../assets/icon.png";
import rich from "../assets/icon.png";
import trade3 from "../assets/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="containers" style={{ background: "rgba(15,78,151,255)" }}>
      <Row>
        <img className="navIcon" alt="ok" src={rich} />
      </Row>
      <Row>
        <FontAwesomeIcon className="icon2" icon={faEnvelope} />
      </Row>
      <Row>
        <FontAwesomeIcon className="icon3" icon={faUserGroup} />
      </Row>
      <Row>
        <img className="navIcon" alt="ok" src={trade3} />
      </Row>
      <Row style={{ marginTop: "400px" }}>
        <img
          alt="ok"
          style={{ borderRadius: "50%", paddingBottom: "5px" }}
          className="navIcon"
          src={customerIcon}
        />
      </Row>
    </div>
  );
}

export default Navbar;
