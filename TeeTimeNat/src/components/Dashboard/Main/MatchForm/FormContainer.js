import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import Form from './Form';
import style from './stylesheet.scss';

class FormContainer extends Component {
  render() {
    return (
      <Divider style={style} id="form-container">
        <Form userData={this.props.userData} username={this.props.username} />
      </Divider>
    );
  }
}

export default FormContainer;
