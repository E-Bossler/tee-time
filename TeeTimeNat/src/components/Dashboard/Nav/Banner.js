import React, {Component} from 'react';
import {Divider, Text} from 'react-native-elements';
import {Link} from 'react-router-native';
import Burger from './Burger';
import './stylesheet.scss';
class Banner extends Component {
  render() {
    // console.log(this.props.message);
    return (
      <Divider id="banner">
        <Text h2>
          <Link to="/dashboard/matchView">Tee Time</Link>
        </Text>
        <Burger
          animate={this.props.action}
          burgerClicked={this.props.clicked}
        />
      </Divider>
    );
  }
}

export default Banner;
