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
        .post("https://tee-time-seattle.herokuapp.com/api/user/score", {
          username
        })
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
      .post("https://tee-time-seattle.herokuapp.com/api/user/score", {
        username
      })
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

    axios.put("https://tee-time-seattle.herokuapp.com/api/user/score", {
      currentScore,
      currentHole,
      userId
    });
  }

  render() {
    const sideOut = this.state.sideOut;
    const sideIn = this.state.sideIn;
    const parData = this.state.parData;
    const hcpData = this.state.hcpData;
    const players = this.props.players;
    const username = this.props.username;
    const playerScore = (index, i) => {
      const score = this.state.playerScoreData[i].scoreData[index].score;

      return (
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {score ? `${score}` : ""}
        </Text>
      );
    };
    const input = (hole, index) => {
      const score = this.state.userScoreData[index].score;
      const id = hole;
      return (
        <Input
          // style={{ borderWidth: 1, borderColor: "red" }}
          containerStyle={{
            justifyContent: "flex-end",
            alignSelf: "center"
          }}
          defaultValue={score ? `${score}` : ""}
          // inputStyle={{ borderWidth: 1, borderColor: "red" }}
          inputContainerStyle={
            {
              // justifyContent: "center"
            }
          }
          className="score-input"
          onChangeText={event => this.handleScoreInput(event, id)}
        />
      );
    };

    return (
      <>
        <View
          style={
            this.props.scorecardView === username
              ? "show scorecard"
              : styles.hidden
          }
        >
          <Text
            style={{ textAlign: "center", marginVertical: 10, fontSize: 25 }}
            className="player-name"
          >
            {username}
          </Text>
          <View className="side-container">
            <Button
              title="OUT"
              id="side-out"
              buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
              style={this.state.viewSideOut ? "selected" : "hidden"}
              onPress={() => this.handleSideViewChange("side-out")}
            />
            <Button
              title="IN"
              id="side-in"
              buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
              style={this.state.viewSideOut ? "hidden" : "selected"}
              onPress={() => this.handleSideViewChange("side-in")}
            />
          </View>

          <ScrollView>
            <Table className="score-table">
              <Row
                textStyle={{ textAlign: "center", fontSize: 25 }}
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
                      textStyle={{ textAlign: "center", fontSize: 20 }}
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
              <TableWrapper
                style={this.state.viewSideOut ? styles.hidden : "in show"}
              >
                {sideIn.map((hole, index) => {
                  return (
                    <Row
                      style={{
                        justifyContent: "center"
                      }}
                      textStyle={{ textAlign: "center", fontSize: 20 }}
                      key={index}
                      data={[
                        hole,
                        parData[index + 9],
                        hcpData[index + 9],
                        input(hole, index + 9)
                      ]}
                    />
                  );
                })}
              </TableWrapper>
            </Table>
          </ScrollView>
        </View>
        <View>
          {players.map((value, i) => {
            return (
              <View
                key={i}
                style={
                  this.props.scorecardView === value
                    ? "show scorecard"
                    : styles.hidden
                }
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginVertical: 10,
                    fontSize: 25
                  }}
                  className="player-name"
                >
                  {value}
                </Text>
                <View className="side-container">
                  <Button
                    title="OUT"
                    id="side-out"
                    buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
                    style={this.state.viewSideOut ? "selected" : "hidden"}
                    onPress={() => this.handleSideViewChange("side-out")}
                  />
                  <Button
                    title="IN"
                    id="side-in"
                    buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
                    style={this.state.viewSideOut ? "hidden" : "selected"}
                    onPress={() => this.handleSideViewChange("side-in")}
                  />
                </View>
                <Table className="score-table">
                  <Row
                    className="table-head"
                    textStyle={{ textAlign: "center", fontSize: 25 }}
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
                          textStyle={{ textAlign: "center", fontSize: 20 }}
                          key={index}
                          data={[
                            hole,
                            parData[index],
                            hcpData[index],
                            playerScore(index, i)
                          ]}
                        />
                      );
                    })}
                  </TableWrapper>
                  <TableWrapper
                    style={this.state.viewSideOut ? styles.hidden : "in show"}
                  >
                    {sideIn.map((hole, index) => {
                      return (
                        <Row
                          style={{
                            justifyContent: "center"
                          }}
                          textStyle={{ textAlign: "center", fontSize: 20 }}
                          key={index}
                          data={[
                            hole,
                            parData[index + 9],
                            hcpData[index + 9],
                            playerScore(index + 9, i)
                          ]}
                        />
                      );
                    })}
                  </TableWrapper>
                </Table>
              </View>
            );
          })}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  hidden: {
    display: "none"
  }
});

export default Scorecard;
