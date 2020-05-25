import React, { Component } from "react";
import GolfAPI from "../../../../../utils/golfGeniusAPI";
import axios from "axios";
import "./stylesheet.css";

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
      playerScoreData: []
    };
  }

  componentDidMount() {
    const course = this.props.course;
    const username = this.props.userData.username;
    const playerData = this.props.playerData;

    const friends = [];
    for (let i = 0; i < playerData.length; i++) {
      friends.push(playerData[i].username);
    }

    const playerScoreData = [];
    for (let i = 0; i < friends.length; i++) {
      let username = friends[i];
      axios
      .post("/api/user/score", { username })
      .then(res => {
        const scoreData = res.data.currentMatch.holes;
        const playerData = {
          username: username,
          scoreData: scoreData
        }
        playerScoreData.push(playerData);
        this.setState({ playerScoreData: playerScoreData});
      });
    }

    axios
      .post("/api/user/score", { username })
      .then(res => {
        const scoreData = res.data.currentMatch.holes;
        this.setState({ userScoreData: scoreData });
      });

    GolfAPI.findCourses()
      .then(res => {
        const allCourseData = res.data.courses;
        console.log(allCourseData);
        console.log(course);
        let matchCourseData;
        for (let i = 0; i < allCourseData.length; i++) {
          if (allCourseData[i].name === course) {
            matchCourseData = allCourseData[i];
          }
        }

        console.log(matchCourseData);

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
    if (event.target.id === "side-out") {
      this.setState({ viewSideOut: true });
    } else {
      this.setState({ viewSideOut: false });
    }
  }

  handleScoreInput(event) {
    event.preventDefault();
    const userId = this.props.userData.id;
    const currentScore = event.target.value;
    const currentHole = event.target.id - 1;

    this.setState({ currentScore: currentScore });
    this.setState({ currentHole: currentHole });

    axios
      .put("/api/user/score", { currentScore, currentHole, userId })
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

      return (
        <div>
          <div
            className={this.props.scorecardView === username ? "show scorecard" : "hide scorecard"}
          >
            <p className="player-name">{username}</p>
            <div className="side-container">
              <p
                id="side-out"
                className={this.state.viewSideOut ? "selected" : "hidden"}
                onClick={this.handleSideViewChange.bind(this)}
              >
                OUT
              </p>
              <p
                id="side-in"
                className={this.state.viewSideOut ? "hidden" : "selected"}
                onClick={this.handleSideViewChange.bind(this)}
              >
                IN
              </p>
            </div>
            <table className="score-table">
              <thead>
                <tr>
                  <th>Hole</th>
                  <th>Par</th>
                  <th>Hcp</th>
                  <th>Score</th>
                </tr>
              </thead>

              <tbody
                className={this.state.viewSideOut ? "out show" : "out hide"}
              >
                {sideOut.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="hole">
                        <span>{value}</span>
                      </td>
                      <td className="par">{parData[index]}</td>
                      <td className="hcp">{hcpData[index]}</td>
                      <td className="score">
                        <form>
                          <input
                            className="score-input"
                            id={value}
                            defaultValue={this.state.userScoreData[index].score ? this.state.userScoreData[index].score : ""}
                            onChange={this.handleScoreInput.bind(this)}
                          />
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody className={this.state.viewSideOut ? "in hide" : "in show"}>
                {sideIn.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="hole">
                        <span>{value}</span>
                      </td>
                      <td className="par-cell">{parData[index + 9]}</td>
                      <td className="hcp-cell">{hcpData[index + 9]}</td>
                      <td className="score-cell">
                        <form>
                          <input
                            className="score-input"
                            id={value}
                            defaultValue={this.state.userScoreData[index].score ? this.state.userScoreData[index].score : ""}
                            onChange={this.handleScoreInput.bind(this)}
                          />
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {players.map((value, i) => {
            return (
              <div
                key={i}
                className={this.props.scorecardView === value ? "show scorecard" : "hide scorecard"}
              >
                <p className="player-name">{value}</p>
                <div className="side-container">
                  <p
                    id="side-out"
                    className={this.state.viewSideOut ? "selected" : "hidden"}
                    onClick={this.handleSideViewChange.bind(this)}
                  >
                    OUT
                  </p>
                  <p
                    id="side-in"
                    className={this.state.viewSideOut ? "hidden" : "selected"}
                    onClick={this.handleSideViewChange.bind(this)}
                  >
                    IN
                  </p>
                </div>
                <table className="score-table">
                  <thead>
                    <tr>
                      <th>Hole</th>
                      <th>Par</th>
                      <th>Hcp</th>
                      <th>Score</th>
                    </tr>
                  </thead>

                  <tbody
                    className={this.state.viewSideOut ? "out show" : "out hide"}
                  >
                    {sideOut.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="hole">
                            <span>{value}</span>
                          </td>
                          <td className="par">{parData[index]}</td>
                          <td className="hcp">{hcpData[index]}</td>
                          <td className="score">
                            {this.state.playerScoreData[i].scoreData[index].score ? 
                            this.state.playerScoreData[i].scoreData[index].score : ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody
                    className={this.state.viewSideOut ? "in hide" : "in show"}
                  >
                    {sideIn.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="hole">
                            <span>{value}</span>
                          </td>
                          <td className="par-cell">{parData[index + 9]}</td>
                          <td className="hcp-cell">{hcpData[index + 9]}</td>
                          <td className="score">
                            {this.state.playerScoreData[i].scoreData[index].score ? 
                            this.state.playerScoreData[i].scoreData[index].score : ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div id="loading-animation">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
  }
}

export default Scorecard;
