import React from 'react';
import {View} from 'react-native';
import {Route} from 'react-router-native';
import FormContainer from './MatchForm/FormContainer';
import TabsContainer from './MatchView/Tabs/TabsContainer';

function Page() {
  return (
    <View>
      <Route exact path="/dashboard/game/new">
        <FormContainer />
      </Route>
      <Route path="/dashboard/game">
        <TabsContainer />
      </Route>
    </View>
  );
}

export default Page;
