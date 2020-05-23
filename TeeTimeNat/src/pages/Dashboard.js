import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Nav from "../components/Dashboard/Nav/Nav";
import Main from "../components/Dashboard/Main/Main";
import Footer from "../components/Dashboard/Footer/Footer";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Nav props={this.props} />

        {/* <Main /> */}

        <Footer />
      </>
    );
  }
}

export default Dashboard;
