import React, { Component } from "react";
import { Button } from "react-native-elements";
import SweetAlert from "react-native-sweet-alert";

function constructionAlert() {
  SweetAlert.showAlertWithOptions({
    title: "Coming Soon",
    subTitle: "Live stats are in the works! Check back soon.",
    style: "info"
  });
}
class Stats extends Component {
  render() {
    return (
      <>
        <Button
          title="Under Construction"
          icon={{ name: "wrench", type: "font-awesome" }}
          iconRight={true}
          buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
          style={{ justifyContent: "center", alignContent: "center" }}
          onPress={constructionAlert}
        />
      </>
    );
  }
}

export default Stats;
