import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import Form from './Form';
import './stylesheet.css';

class FormContainer extends Component {
  render() {
    return (
      <Divider id="form-container">
        <Form userData={this.props.userData} username={this.props.username} />
      </Divider>
    );
  }
}

export default FormContainer;
