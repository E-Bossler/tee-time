import React from 'react';
import {Divider} from 'react-native-elements';
import NavTabs from './NavTabs';
import style from './stylesheet.scss';

function TabsContainer() {
  return (
    <Divider style={style} id="tabs-container">
      <NavTabs />
    </Divider>
  );
}

export default TabsContainer;
