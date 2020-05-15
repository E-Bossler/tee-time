import React, { Component } from "react";
import "./stylesheet.css";

class MsgInput extends Component {
    render() {
        return(
            <div 
                id="input-container" 
                onSubmit={this.props.submitChatMessage}
            >
                <input 
                    type="text" 
                    id="chat-input" 
                    placeholder="Type your message here..."
                    value={this.props.value} 
                    onChange={this.props.handleChange}
                />
                <button 
                    type="submit" 
                    id="send-btn"
                >
                    send
                </button>
            </div>
        );
    } 
};

export default MsgInput;
    