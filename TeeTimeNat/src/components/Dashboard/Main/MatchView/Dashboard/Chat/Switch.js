import React, { Component } from "react";
import {Icon, Divider, CheckBox, Text} from 'react-native-elements'
import "./stylesheet.scss";

class Switch extends Component {
    render() {
        return(
            <Divider className="switch-container">
                <Text className="switch">
                <CheckBox id="dark-mode" type="checkbox" />
                <Icon className="slider"></Icon>
                </Text>
            </Divider>
        );
    } 
};

export default Switch;