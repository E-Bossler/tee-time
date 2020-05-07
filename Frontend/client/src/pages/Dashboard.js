import React from 'react';
import Nav from '../../../client/src/components/Dashboard/Nav/Nav';
import Page from '../../../client/src/components/Dashboard/Main/Page';
import Chat from '../../../client/src/components/Dashboard/Main/MatchView/Tabs/Chat';

function Dashboard() {
  return (
    <div>
      <Nav />
      <Page />
      <Chat />
    </div>
  );
}

export default Dashboard;
