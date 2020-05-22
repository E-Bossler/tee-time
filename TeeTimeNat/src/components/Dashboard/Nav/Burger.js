import React, {Component} from 'react';
import {Divider} from 'react-native-elements';

class Burger extends Component {
  render() {
    return (
      <Divider id="burger" onClick={this.props.animate}>
        <Divider
          className={this.props.burgerClicked ? 'line toggle1' : 'line'}
          id="line1"
        />
        <Divider
          className={this.props.burgerClicked ? 'line toggle2' : 'line'}
          id="line2"
        />
        <Divider
          className={this.props.burgerClicked ? 'line toggle3' : 'line'}
          id="line3"
        />
      </Divider>
    );
  }
}

export default Burger;
