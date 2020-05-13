import React, { Component } from "react";

class Matches extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    fetch("/api/dashboard/userMenu/matches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then(response => response.json())
      .then(matches => {
        this.setState({ matches });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Matches</h2>
        <ul>
          {this.state.matches.map(match => {
            return <li key={match._id}>{match.course}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Matches;
