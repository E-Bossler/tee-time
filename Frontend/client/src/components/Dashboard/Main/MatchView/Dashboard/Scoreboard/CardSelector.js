import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class CardSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          players: [],
          course: ""
        };
    }
    
    getMatchData = username => {
        return axios
          .put("/api/match/current", {username})
    }
    
    componentDidMount() {
        const username = this.props.username;
        this.getMatchData(username).then(res => {
            console.log(res.data);
            const players = res.data[0].currentMatch[0].players;
            const course = res.data[0].currentMatch[0].courseName;
    
            this.setState({ username: username });
            this.setState({ players: players });
            this.setState({ course: course });
        });
    }

    render() {
        const players = this.props.players;

        return(
            <div id="card-selector">
                <form>
                    {players.map((value, index) => {
                        return <div 
                        key={index}
                        >
                            <input type="radio" id={value} name="scorecard-radio" value={value} />
                            <label htmlFor={value}>{value}</label> 
                        </div>
                    })}
                    <div id="radio-group">
                        <input type="radio" id="all" name="scorecard-radio" value="all" />
                        <label htmlFor="all">View All</label>
                    </div>
                </form>
            </div>
        )
    }
};

export default CardSelector;