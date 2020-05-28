import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Input } from "react-native-elements";
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
    const userId = this.props.userData.id;
    const currentScore = event;
    const currentHole = id;

    console.log("score submit", currentScore, currentHole);

    this.setState({ currentScore: currentScore });
    this.setState({ currentHole: currentHole });

    axios
      .put("http://192.168.138.2:7777/api/user/score", {
        currentScore,
        currentHole,
        userId
      })
      .then(res => {
        console.log(res.data);
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
      const input = id => {
        return (
          <Input
            // style={{ borderWidth: 1, borderColor: "red" }}
            containerStyle={{ borderWidth: 1, borderColor: "red" }}
            // inputStyle={{ borderWidth: 1, borderColor: "red" }}
            inputContainerStyle={{ borderWidth: 1, borderColor: "red" }}
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
              <Text
                id="side-out"
                style={this.state.viewSideOut ? "selected" : "hidden"}
                onPress={() => this.handleSideViewChange("side-out")}
              >
                OUT
              </Text>
              <Text
                id="side-in"
                style={this.state.viewSideOut ? "hidden" : "selected"}
                onPress={() => this.handleSideViewChange("side-in")}
              >
                IN
              </Text>
            </View>
            <ScrollView>
              <Table className="score-table">
                <Row className="table-head" data={this.state.tableHead} />
                <TableWrapper
                  style={this.state.viewSideOut ? "out show" : "hidden"}
                >
                  {sideOut.map((value, index) => {
                    return (
                      <Row
                        key={index}
                        data={[
                          value,
                          parData[index],
                          hcpData[index],
                          input(value)
                        ]}
                      />
                    );
                    {
                      /* <Cell className="hole" data={value} />

                        <Cell className="par" data={parData[index]} />
                        <Cell className="hcp" data={hcpData[index]} />
                        <Cell className="score">
                          <Input
                            className="score-input"
                            id={value}
                            defaultValue={
                              this.state.userScoreData[index].score
                                ? this.state.userScoreData[index].score
                                : ""
                            }
                            onChangeText={this.handleScoreInput.bind(this)}
                          />
                        </Cell>
                      </Row> */
                    }
                  })}
                </TableWrapper>

                <TableWrapper
                  style={this.state.viewSideOut ? styles.hidden : "in show"}
                >
                  {sideIn.map((value, index) => {
                    return (
                      <Row key={index}>
                        <Cell id="Cell" className="hole">
                          <Text>{value}</Text>
                        </Cell>
                        <Cell id="Cell" className="par-cell">
                          {parData[index + 9]}
                        </Cell>
                        <Cell id="Cell" className="hcp-cell">
                          {hcpData[index + 9]}
                        </Cell>
                        <Cell id="Cell" className="score-cell">
                          <Input
                            className="score-input"
                            id={value}
                            defaultValue={
                              this.state.userScoreData[index].score
                                ? this.state.userScoreData[index].score
                                : ""
                            }
                            onChangeText={this.handleScoreInput.bind(this)}
                          />
                        </Cell>
                      </Row>
                    );
                  })}
                </TableWrapper>
              </Table>

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
                    <Text className="player-name">{value}</Text>
                    <View className="side-container">
                      <Text
                        id="side-out"
                        style={
                          this.state.viewSideOut ? "selected" : styles.hidden
                        }
                        onClick={this.handleSideViewChange.bind(this)}
                      >
                        OUT
                      </Text>
                      <Text
                        id="side-in"
                        style={
                          this.state.viewSideOut ? styles.hidden : "selected"
                        }
                        onClick={this.handleSideViewChange.bind(this)}
                      >
                        IN
                      </Text>
                    </View>
                    <Table className="score-table">
                      <Row className="table-head" data={this.state.tableHead} />

                      <TableWrapper
                        style={
                          this.state.viewSideOut ? "out show" : styles.hidden
                        }
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
                                  ? this.state.playerScoreData[i].scoreData[
                                      index
                                    ].score
                                  : ""}
                              </Cell>
                            </Row>
                          );
                        })}
                      </TableWrapper>
                      <TableWrapper
                        style={
                          this.state.viewSideOut ? styles.hidden : "in show"
                        }
                      >
                        {sideIn.map((value, index) => {
                          return (
                            <Row key={index}>
                              <Cell className="hole">
                                <Text>{value}</Text>
                              </Cell>
                              <Cell className="par-cell">
                                {parData[index + 9]}
                              </Cell>
                              <Cell className="hcp-cell">
                                {hcpData[index + 9]}
                              </Cell>
                              <Cell className="score">
                                {this.state.playerScoreData[i].scoreData[index]
                                  .score
                                  ? this.state.playerScoreData[i].scoreData[
                                      index
                                    ].score
                                  : ""}
                              </Cell>
                            </Row>
                          );
                        })}
                      </TableWrapper>
                    </Table>
                  </View>
                );
              })}
            </ScrollView>
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
