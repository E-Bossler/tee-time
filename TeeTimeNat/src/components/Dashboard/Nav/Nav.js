import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import Banner from './Banner';
import Slider from './Slider';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  animate() {
    if (this.state.clicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  }

  render() {
    return (
      <Divider>
        <Banner action={this.animate.bind(this)} clicked={this.state.clicked} />
        <Slider action={this.animate.bind(this)} clicked={this.state.clicked} />
      </Divider>
    );
  }
}

export default Nav;