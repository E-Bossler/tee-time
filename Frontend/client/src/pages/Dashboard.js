import React from 'react';
import Header from '../../../client/src/components/Dashboard/Header/Header';
import Page from '../../../client/src/components/Dashboard/Main/Page';
import Chat from '../../../client/src/components/Dashboard/Main/MatchView/Tabs/Chat';

function Dashboard() {
  return (
    <div>
      <Header />
      <Page />
      <Chat />
    </div>
  );
}

export default Dashboard;
