import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { access_token } from "../context/Token.js";
import currentUser from "../assets/icon.png";
import customer from "../assets/icon.png";
import refreshIcon from "../assets/icon.png";
import MessengerCustomerChat from "react-messenger-customer-chat";

function Chat({ chatId = null, currentUserId = null, currentCustomer = null }) {
  const [conversation, setConversations] = useState([]);
  //new

  async function fetchChats() {
    try {
      const url = `https://graph.facebook.com/v19.0/${chatId}/messages?fields=from,message,created_time`;
      const permissions = "pages_messaging,read_mailbox,read_page_mailbox";
      const params = {
        permissions,
        access_token,
      };
      const response = await axios.get(url, { params });
      const conversationData = response?.data?.data;
      console.log("res data inside chats", response?.data?.data);
      conversationData.reverse();
      setConversations(conversationData);

      return conversationData;
    } catch (error) {
      console.log(error);
    }
  }
  setInterval(fetchChats, 1000);

  const submitNewChat = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputText = event.target.value.trim();
      if (inputText !== "") {
        try {
          const url = `https://graph.facebook.com/v19.0/me/messages?access_token=${access_token}`;
          const body = {
            recipient: { id: currentCustomer?.id },
            message: { text: inputText },
          };
          const response = await axios.post(url, body);
          console.log("new chat posted", response);
          event.target.value = "";
          fetchChats();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  useEffect(() => {
    if (chatId) fetchChats();
  }, [chatId]);

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
      <MessengerCustomerChat
        pageId="61556751687716"
        appId="1836900123429517"
        // htmlRef="<REF_STRING>"
      />
      <div className="chatUserName">
        <h3>{currentCustomer?.name}</h3>
        <button onClick={fetchChats} className="refreshBtn">
          <img src={refreshIcon} alt="Refresh Icon" />
        </button>
      </div>
      <div>
        {conversation?.map((msg, index) => {
          // const isLastFromUser = index === conversation.length - 1 || conversation[index + 1].userId !== msg.userId;
          return renderMsg(msg, index);
        })}
      </div>
      <form className="msgDiv">
        <input
          onKeyDown={submitNewChat}
          className="msgInput"
          type="text"
          placeholder="Message Hiten Saxena"
        ></input>
      </form>
    </div>
  );
}

export default Chat;
