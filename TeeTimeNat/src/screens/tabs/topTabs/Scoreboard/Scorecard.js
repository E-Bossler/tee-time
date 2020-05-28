import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import GolfAPI from "../../../../utils/golfGeniusAPI";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import axios from "axios";
import "./stylesheet.scss";

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      holes: "",
      sideOut: [],
      sideIn: [],
      parData: [],
      hcpData: [],
      yardageData: [],
      viewSideOut: true,
      currentScore: "",
      currentHole: "",
      userScoreData: [],
      playerScoreData: [],
      tableHead: ["Hole", "Par", "HCP", "Score"]
    };
  }

  componentDidMount() {
    const course = this.props.course;
    const username = this.props.userData.username;
    const playerData = this.props.playerData;
    const playerScoreData = [];
    const friends = [];

    for (let i = 0; i < playerData.length; i++) {
      friends.push(playerData[i].username);
    }

    for (let i = 0; i < friends.length; i++) {
      let username = friends[i];
      axios
        .post("http://192.168.138.2:7777/api/user/score", { username })
        .then(res => {
          const scoreData = res.data.currentMatch.holes;

          const playerData = {
            username: username,
            scoreData: scoreData
          };
          playerScoreData.push(playerData);
          this.setState({ playerScoreData: playerScoreData });
        });
    }

    axios
      .post("http://192.168.138.2:7777/api/user/score", { username })
      .then(res => {
        const scoreData = res.data.currentMatch.holes;
        this.setState({ userScoreData: scoreData });
      });

    GolfAPI.findCourses()
      .then(res => {
        const allCourseData = res.data.courses;
        let matchCourseData;
        for (let i = 0; i < allCourseData.length; i++) {
          if (allCourseData[i].name === course) {
            matchCourseData = allCourseData[i];
          }
        }

        const holes = matchCourseData.hole_labels;
        this.setState({ holes: holes });

        const sideOut = this.state.holes.splice(0, 9);
        this.setState({ sideOut: sideOut });

        const sideIn = this.state.holes.splice(0, 9);
        this.setState({ sideIn: sideIn });

        const parData = matchCourseData.tees[0].hole_data.par;
        this.setState({ parData: parData });

        const hcpData = matchCourseData.tees[0].hole_data.handicap;
        this.setState({ hcpData: hcpData });

        const yardageData = matchCourseData.tees[0].hole_data.yardage;
        this.setState({ yardageData: yardageData });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  handleSideViewChange(event) {
    if (event === "side-out") {
      this.setState({ viewSideOut: true });
    } else {
      this.setState({ viewSideOut: false });
    }
  }

  handleScoreInput(event, id) {
    const userId = this.props.userData._id;
    const currentScore = event;
    const currentHole = id - 1;

    this.setState({ currentScore: currentScore });
    this.setState({ currentHole: currentHole });

    axios.put("http://192.168.138.2:7777/api/user/score", {
      currentScore,
      currentHole,
      userId
    });
  }

  render() {
    if (!this.state.loading) {
      const sideOut = this.state.sideOut;
      const sideIn = this.state.sideIn;
      const parData = this.state.parData;
      const hcpData = this.state.hcpData;
      const players = this.props.players;
      const username = this.props.username;
      const input = (hole, index) => {
        const score = this.state.userScoreData[index].score;
        const id = hole;
        return (
          <Input
            // style={{ borderWidth: 1, borderColor: "red" }}
            containerStyle={{
              borderWidth: 1,
              borderColor: "red",
              justifyContent: "flex-end",
              alignSelf: "center"
            }}
            defaultValue={score ? `${score}` : ""}
            // inputStyle={{ borderWidth: 1, borderColor: "red" }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "red",
              alignSelf: "auto"
              // justifyContent: "center"
            }}
            className="score-input"
            onChangeText={event => this.handleScoreInput(event, id)}
          />
        );
      };

      return (
        <View>
          <View
            style={
              this.props.scorecardView === username
                ? "show scorecard"
                : styles.hidden
            }
          >
            <Text className="player-name">{username}</Text>
            <View className="side-container">
              <Button
                title="OUT"
                id="side-out"
                style={this.state.viewSideOut ? "selected" : "hidden"}
                onPress={() => this.handleSideViewChange("side-out")}
              />
              <Button
                title="IN"
                id="side-in"
                style={this.state.viewSideOut ? "hidden" : "selected"}
                onPress={() => this.handleSideViewChange("side-in")}
              />
            </View>

            <Table className="score-table">
              <ScrollView>
                <Row
                  textStyle={{ textAlign: "center" }}
                  style={{ alignItems: "center" }}
                  className="table-head"
                  data={this.state.tableHead}
                />

                <TableWrapper
                  style={this.state.viewSideOut ? "out show" : styles.hidden}
                >
                  {sideOut.map((hole, index) => {
                    return (
                      <Row
                        style={{
                          justifyContent: "center"
                        }}
                        textStyle={{ textAlign: "center" }}
                        key={index}
                        data={[
                          hole,
                          parData[index],
                          hcpData[index],
                          input(hole, index)
                        ]}
                      />
                    );
                  })}
                </TableWrapper>
              </ScrollView>
              <TableWrapper
                style={this.state.viewSideOut ? styles.hidden : "in show"}
              >
                {sideIn.map((hole, index) => {
                  return (
                    <Row
                      style={{
                        justifyContent: "center"
                      }}
                      textStyle={{ textAlign: "center" }}
                      key={index}
                      data={[
                        hole,
                        parData[index + 9],
                        hcpData[index + 9],
                        input(hole, index)
                      ]}
                    />
                  );
                })}
              </TableWrapper>
            </Table>

            {players.map((value, i) => {
              console.log("player value", value);
              console.log("scorecard prop", this.props.scorecardView);

              <View
                key={i}
                style={
                  this.props.scorecardView === value
                    ? "show scorecard"
                    : styles.hidden
                }
              >
                <Text className="player-name">{value}</Text>
                <View className="side-container">
                  <Button
                    title="OUT"
                    id="side-out"
                    style={this.state.viewSideOut ? "selected" : "hidden"}
                    onPress={() => this.handleSideViewChange("side-out")}
                  />
                  <Button
                    title="IN"
                    id="side-in"
                    style={this.state.viewSideOut ? "hidden" : "selected"}
                    onPress={() => this.handleSideViewChange("side-in")}
                  />
                </View>
                <Table className="score-table">
                  <Row className="table-head" data={this.state.tableHead} />

                  <TableWrapper
                    style={this.state.viewSideOut ? "out show" : styles.hidden}
                  >
                    {sideOut.map((value, index) => {
                      return (
                        <Row key={index}>
                          <Cell className="hole">
                            <Text>{value}</Text>
                          </Cell>
                          <Cell className="par">{parData[index]}</Cell>
                          <Cell className="hcp">{hcpData[index]}</Cell>
                          <Cell className="score">
                            {this.state.playerScoreData[i].scoreData[index]
                              .score
                              ? this.state.playerScoreData[i].scoreData[index]
                                  .score
                              : ""}
                          </Cell>
                        </Row>
                      );
                    })}
                  </TableWrapper>
                  <TableWrapper
                    style={this.state.viewSideOut ? styles.hidden : "in show"}
                  >
                    {sideIn.map((value, index) => {
                      return (
                        <Row key={index}>
                          <Cell className="hole">
                            <Text>{value}</Text>
                          </Cell>
                          <Cell className="par-cell">{parData[index + 9]}</Cell>
                          <Cell className="hcp-cell">{hcpData[index + 9]}</Cell>
                          <Cell className="score">
                            {this.state.playerScoreData[i].scoreData[index]
                              .score
                              ? this.state.playerScoreData[i].scoreData[index]
                                  .score
                              : ""}
                          </Cell>
                        </Row>
                      );
                    })}
                  </TableWrapper>
                </Table>
              </View>;
            })}
          </View>
        </View>
      );
    } else {
      return (
        <View id="loading-animation">
          <View className="lds-roller">
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  hidden: {
    display: "none"
  }
});

export default Scorecard;
