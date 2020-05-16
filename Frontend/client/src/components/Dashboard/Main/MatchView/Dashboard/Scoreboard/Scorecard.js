import React, { Component } from "react";
import SideContainer from "./SideContainer";
import "./stylesheet.css";

const saveIconStyles = {
    "--fa-secondary-opacity": "1.0",
    "--fa-primary-color": "white",
    "--fa-secondary-color": "limegreen",
};

class Scorecard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            course: "",
            players: []
        };
    }

    componentDidMount() {
        const user = this.state.username;
    
        // get current match course

        // get curren match players
    
    }

    render() {
        return(
            <div className="scorecard">
                <p className="player-name">Player1</p>
                <SideContainer/ >
                <table className="score-table">
                    <thead>
                        <tr>
                            <th>Hole</th>
                            <th>Par</th>
                            <th>Score</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className="out">
                        <tr className="hole1">
                            <td className="hole">
                            <span>1</span>
                            </td>
                            <td className="par"></td>
                            <td className="score">
                            <form>
                                <input className="score-input"/>
                            </form>
                            </td>
                            <td>
                            <button>
                                <i 
                                    className="fad fa-check-square fa-2x" 
                                    style={saveIconStyles}
                                >
                                </i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Scorecard;