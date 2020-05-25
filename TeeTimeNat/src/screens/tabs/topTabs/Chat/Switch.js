import React, {Component} from 'react';
import {Icon, Divider, CheckBox, Text} from 'react-native-elements';
import style from './stylesheet.scss';

class Switch extends Component {
  render() {
    return (
      <Divider style={style} className="switch-container">
        <Text className="switch">
          <CheckBox id="dark-mode" type="checkbox" />
          <Icon className="slider" />
        </Text>
      </Divider>
    );
  }
}

export default Switch;
