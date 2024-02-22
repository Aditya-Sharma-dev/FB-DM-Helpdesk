import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./styles.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { MDBIcon } from "mdb-react-ui-kit";
import displayData from "../context/dummy.json";

function ChatList({ handleActiveChats }) {
  const [currentChatId, setCurrentChatId] = useState(null);

  return (
    <div className="containers">
      <div className="conversationHeader">
        <FontAwesomeIcon className="icon1" icon={faBarsStaggered} />
        <h3 style={{ paddingRight: "10px", color: "rgba(61,62,62,255)" }}>
          Conversations
        </h3>
        <button className="refreshBtn">
          <MDBIcon
            icon="spinner"
            size="2x"
            style={{ width: "30px", height: "30px", marginBottom: "2px" }}
          />
        </button>
      </div>

      {displayData.data.map((item, index) => (
        <div
          className={`conversationItem ${
            item.id === currentChatId ? "" : "currentConversation"
          }`}
          // onClick={() => setActiveChats(item)}
          key={item.id}
        >
          <Row>
            <Col className="checkBox" md="1" xs="1">
              <input type="checkbox" />
            </Col>
            <Col md="8" xs="8">
              <Row className="pl5 body-1-strong">{item.clientName}</Row>
              <Row className="pl5 body-2">{item.msgType}</Row>
            </Col>
            <Col md="3" xs="3">
              <span className="text">{item.time}</span>
            </Col>
          </Row>
          <Row className="itemContent">
            <Col md="12" xs="12">
              <Row className="label">
                {" "}
                <b>{item.subject}</b>
              </Row>
              <Row className="text">{item.msg}</Row>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
