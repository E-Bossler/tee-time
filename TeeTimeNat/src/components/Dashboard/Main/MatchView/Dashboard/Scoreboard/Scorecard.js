import React, {Component} from 'react';
import {Divider, Text} from 'react-native-elements';
import GolfAPI from '../../../../../utils/golfGeniusAPI';
import axios from 'axios';
import style from './stylesheet.scss';

/// IMPORT REACT NATIVE TABLE COMPONENT
/// This is not ready to convert

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      holes: '',
      sideOut: [],
      sideIn: [],
      parData: [],
      hcpData: [],
      yardageData: [],
      viewSideOut: true,
      currentScore: '',
      currentHole: '',
    };
  }

  componentDidMount() {
    const course = this.props.course;

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
        this.setState({holes: holes});

        const sideOut = this.state.holes.splice(0, 9);
        this.setState({sideOut: sideOut});

        const sideIn = this.state.holes.splice(0, 9);
        this.setState({sideIn: sideIn});

        const parData = matchCourseData.tees[0].hole_data.par;
        this.setState({parData: parData});

        const hcpData = matchCourseData.tees[0].hole_data.handicap;
        this.setState({hcpData: hcpData});

        const yardageData = matchCourseData.tees[0].hole_data.yardage;
        this.setState({yardageData: yardageData});

        // console.log(this.state);
      })
      .then(() => {
        this.setState({loading: false});
      });
  }

  handleSideViewChange(event) {
    if (event.target.id === 'side-out') {
      this.setState({viewSideOut: true});
    } else {
      this.setState({viewSideOut: false});
    }
  }

  handleScoreInput(event) {
    event.preventDefault();
    const userData = this.props.userData;
    const currentScore = event.target.value;
    const currentHole = event.target.id;
    this.setState({currentScore: currentScore});
    this.setState({currentHole: currentHole});
    axios
      .post('/api/user/score', {currentScore, currentHole, userData})
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
      const indexToSplice = players.indexOf(username);
      players.splice(1, indexToSplice);
      console.log(players);

      return (
        <Divider style={style}>
          <Divider
            className={
              this.props.scorecardView === username
                ? 'show scorecard'
                : 'hide scorecard'
            }>
            <Text className="player-name">{username}</Text>
            <Divider className="side-container">
              <Text
                id="side-out"
                className={this.state.viewSideOut ? 'selected' : 'hidden'}
                onClick={this.handleSideViewChange.bind(this)}>
                OUT
              </Text>
              <Text
                id="side-in"
                className={this.state.viewSideOut ? 'hidden' : 'selected'}
                onClick={this.handleSideViewChange.bind(this)}>
                IN
              </Text>
            </Divider>

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
                className={this.state.viewSideOut ? 'out show' : 'out hide'}>
                {sideOut.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="hole">
                        <Text note="This was a span.">{value}</Text>
                      </td>
                      <td className="par">{parData[index]}</td>
                      <td className="hcp">{hcpData[index]}</td>
                      <td className="score">
                        <Divider>
                          <Input
                            className="score-input"
                            id={value}
                            // value={event.target.value}
                            onChange={this.handleScoreInput.bind(this)}
                          />
                        </Divider>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody className={this.state.viewSideOut ? 'in hide' : 'in show'}>
                {sideIn.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="hole">
                        <Text note="This was a span.">{value}</Text>
                      </td>
                      <td className="par-cell">{parData[index + 9]}</td>
                      <td className="hcp-cell">{hcpData[index + 9]}</td>
                      <td className="score-cell">
                        <Divider>
                          <Input
                            className="score-input"
                            value={this.state.currentScore}
                            onChange={this.handleScoreInput.bind(this)}
                          />
                        </Divider>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Divider>
          {players.map((value, index) => {
            return (
              <Divider
                key={index}
                className={
                  this.props.scorecardView === value
                    ? 'show scorecard'
                    : 'hide scorecard'
                }>
                <Text className="player-name">{value}</Text>
                <Divider className="side-container">
                  <Text
                    id="side-out"
                    className={this.state.viewSideOut ? 'selected' : 'hidden'}
                    onClick={this.handleSideViewChange.bind(this)}>
                    OUT
                  </Text>
                  <Text
                    id="side-in"
                    className={this.state.viewSideOut ? 'hidden' : 'selected'}
                    onClick={this.handleSideViewChange.bind(this)}>
                    IN
                  </Text>
                </Divider>
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
                    className={
                      this.state.viewSideOut ? 'out show' : 'out hide'
                    }>
                    {sideOut.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="hole">
                            <Text note="Span">{value}</Text>
                          </td>
                          <td className="par">{parData[index]}</td>
                          <td className="hcp">{hcpData[index]}</td>
                          <td className="score">?</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody
                    className={this.state.viewSideOut ? 'in hide' : 'in show'}>
                    {sideIn.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="hole">
                            <Text note="span">{value}</Text>
                          </td>
                          <td className="par-cell">{parData[index + 9]}</td>
                          <td className="hcp-cell">{hcpData[index + 9]}</td>
                          <td className="score-cell">?</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Divider>
            );
          })}
        </Divider>
      );
    } else {
      return (
        <div>
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          {/* <p id="loading-msg">Loading...</p> */}
        </div>
      );
    }
  }
}

export default Scorecard;
