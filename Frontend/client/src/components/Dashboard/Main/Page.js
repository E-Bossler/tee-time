import React from "react";
import { Route } from "react-router-dom";
import FormContainer from "./MatchForm/FormContainer";
import StartBtn from "./StartBtn/StartBtn";
import TabsContainer from "./MatchView/Tabs/TabsContainer";
// import Router from "react-router-dom";

function Page() {
  return (
    <div>
      <Route exact path="/dashboard">
        <StartBtn />
        <FormContainer />
      </Route>
      <Route path="/dashboard/game">
        <TabsContainer />
      </Route>
    </div>
  );
}

export default Page;
