import React from "react";
import Header from "../components/Dashboard/Header/Header";
import Page from "../components/Dashboard/Main/Page";
import Chatroom from "../components/Chatoom/Chatroom";

function Dashboard() {
  return (
    <div>
      <Header />
      <Page />
      <Chatroom />
    </div>
  );
}

export default Dashboard;
