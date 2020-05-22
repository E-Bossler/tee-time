import React, { Component } from "react";
import "./stylesheet.css";

class CardSelector extends Component {
 render() {
    const players = this.props.players;
    const username = this.props.username;

    return (
      <div id="card-selector">
        <form>
          <div id="radio-group">
            <input
              type="radio"
              id={username}
              name="scorecard-radio"
              value={username}
              className="scorecard-radio"
              onChange={this.props.handleCardViewChange}
            />
            <label htmlFor={username}>
              <span>
                <span></span>
              </span>
              {username}
            </label>
          </div>
          {players.map((value, index) => {
            return (
              <div id="radio-group" key={index}>
                <input
                  type="radio"
                  id={value}
                  name="scorecard-radio"
                  value={value}
                  className="scorecard-radio"
                  onChange={this.props.handleCardViewChange}
                />
                <label htmlFor={value}>
                  <span>
                    <span></span>
                  </span>
                  {value}
                </label>
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}

export default CardSelector;
