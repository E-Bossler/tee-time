import React, {Component} from 'react';
import {View} from 'react-native';
import Links from './Links';
import './stylesheet.scss';

class Slider extends Component {
  render() {
    return (
      <View id="slider">
        <Links animate={this.props.action} burgerClicked={this.props.clicked} />
      </View>
    );
  }
}

export default Slider;
