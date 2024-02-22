import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Navbar from "./Navbar";
import ChatList from "./ChatList";
import Chat from "./Chat";
import Profile from "./Profile";
import './styles.modules.css'

function Dashboard() {
  const [chatId, setChatId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const setCurrentChatCustomer = (item) => {
    setChatId(item?.id);
    setCurrentUser(item?.participants?.data?.[1]?.id);
    setCurrentCustomer(item?.participants?.data?.[0]);
  };

  return (
    <>
      <Row style={{ background: "white" }}>
        <Col className="remove-paddings" md="1" xs="12">
          <Navbar />
        </Col>
        <Col className="remove-paddings" md="3" xs="12">
          <ChatList handleActiveChats={setCurrentChatCustomer} />
        </Col>
        <Col className="remove-paddings" md="5" xs="12">
          <Chat
            chatId={chatId}
            currentUserId={currentUser}
            currentCustomer={currentCustomer}
          />
        </Col>
        <Col className="remove-paddings" md="3" xs="12">
          <Profile currentCustomer={currentCustomer} />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
