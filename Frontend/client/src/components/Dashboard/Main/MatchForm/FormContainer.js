import React, {Component} from "react";
import NewMatchBtn from "./NewMatchBtn";
import Form from "./Form";
import "./stylesheet.css";

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        };
    };

    showForm() {
        console.log("hello");
        if (this.state.clicked) {
            this.setState({ clicked: false });
        } else {
            this.setState({ clicked: true });
        }
    }

    render() {
        return(
            <div id="form-container" className={this.props.hideForm ? "hideForm" : "showForm"}>
                <NewMatchBtn
                    // pass showForm function down
                    action={this.showForm.bind(this)} 
                    // pass clicked state down
                    clicked={this.state.clicked}
                />
                <Form 
                    // pass clicked state down
                    clicked={this.state.clicked} 

                    // passing down switchView function from Main component
                    switchMatchView={this.props.action}
                />
            </div>
        );
    }
};

export default FormContainer;