import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import currentUser from "../assets/icon.png";
import customer from "../assets/icon.png";
// import MessengerCustomerChat from "react-messenger-customer-chat";

function Chat({ chatId = null, currentUserId = null, currentCustomer = null }) {
  const [conversation, setConversations] = useState([]);

  const renderMsg = (msg, index, isLastFromUser) => {
    const isCurrentUser = msg?.from?.id === currentUserId;
    return (
      <Row
        className={isCurrentUser ? "userChatsText" : "customerChatsText"}
        key={msg.id}
      >
        <Col md="1" className="chatsIconUsers">
          {!isCurrentUser && (
            <img
              className="chatIconUsersImg"
              src={currentUser}
              alt="User Icon"
            />
          )}
        </Col>
        <Col md="9">
          <span style={{ backgroundColor: "rgba(255,255,255,255)" }}>
            {msg?.message}
          </span>
        </Col>
        {/* {isLastFromUser && <div className="timeStamp">{new Date(msg.time).toLocaleTimeString()}</div>} */}
        <Col className="chatsIconUsers" md="1">
          {isCurrentUser && (
            <img className="chatIconUsersImg" src={customer} alt="User Icon" />
          )}
        </Col>
      </Row>
    );
  };

  return (
    <div className="containers chatContainer">
      {/* <MessengerCustomerChat
        pageId="61556751687716"
        appId="1836900123429517"
        // htmlRef="<REF_STRING>"
      /> */}
      <div className="chatUserName">
        <h3>{currentCustomer?.name} Amit RG</h3>
        {/* <button onClick={fetchChats} className="refreshBtn">
          <img src={refreshIcon} alt="Refresh Icon" />
        </button> */}
      </div>
      <div>
        {conversation?.map((msg, index) => {
          // const isLastFromUser = index === conversation.length - 1 || conversation[index + 1].userId !== msg.userId;
          return renderMsg(msg, index);
        })}
      </div>
      <form className="msgDiv">
        <input
          className="msgInput"
          type="text"
          placeholder="Message Hiten Saxena"
        ></input>
      </form>
    </div>
  );
}

export default Chat;
