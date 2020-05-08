import React, {Component} from "react";
import FormContainer from "./MatchForm/FormContainer";
import MatchView from "./MatchView/MatchView";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchView: false
        };
    };

    switchView() {
        console.log("hi");
        if (this.state.switchView) {
            this.setState({ switchView: false });
        } else {
            this.setState({ switchView: true });
        }
    }

    render() {
        return(
            <div>
                <FormContainer 
                    // passing down switchView function
                    action={this.switchView.bind(this)}
                    // passing down startMatch state
                    hideForm={this.state.switchView} 
                />
                <MatchView 
                    // show match view if state switchView is true
                    className={this.state.switchView ? "showMatchView" : "hideMatchView"} 
                />
            </div>
        );
    };
};

export default Main;