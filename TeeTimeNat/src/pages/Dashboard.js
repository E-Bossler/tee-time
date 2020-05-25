import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import Links from "../components/Dashboard/Nav/Links";
import Main from "../components/Dashboard/Main/Main";
import Footer from "../components/Dashboard/Footer/Footer";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Links navigation={this.props.navigation} />

          <Main route={this.props.route} navigation={this.props.navigation} />
        </ScrollView>

        <Footer />
      </View>
    );
  }
}

export default Dashboard;
