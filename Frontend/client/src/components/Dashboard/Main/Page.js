import React from "react";
import { Route } from "react-router-dom";
import FormContainer from "./MatchForm/FormContainer";
import TabsContainer from "./MatchView/Tabs/TabsContainer";

function Page() {
  return (
    <div>
      <Route exact path="/dashboard/game/new">
        <FormContainer />
      </Route>
      <Route path="/dashboard/game">
        <TabsContainer />
      </Route>
    </div>
  );
}

export default Page;
