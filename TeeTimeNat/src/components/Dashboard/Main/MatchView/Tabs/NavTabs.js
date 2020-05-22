import React, {Component} from 'react';
import {Divider, ListItem} from 'react-native-elements';
import {Link} from 'react-router-native';
import style from './stylesheet.scss';

class NavTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreTab: false,
      chatTab: false,
    };
  }

  selectScoreTab() {
    this.setState({scoreTab: true});
    this.setState({chatTab: false});
  }

  selectChatTab() {
    this.setState({scoreTab: false});
    this.setState({chatTab: true});
  }

  render() {
    return (
      <Divider style={style} id="tabs-list">
        {/* <li className="nav-tab">
          <Link id="tracker-tab" to="/dashboard/matchView/tracker">
            Course
          </Link>
        </li> */}
        <ListItem
          className={this.state.scoreTab ? 'nav-tab selected-tab' : 'nav-tab'}>
          <Link
            className="nav-link"
            id="score-tab"
            to="/dashboard/matchView/scoreboard"
            onClick={this.selectScoreTab.bind(this)}>
            Scoreboard
          </Link>
        </ListItem>
        <ListItem
          className={this.state.chatTab ? 'nav-tab selected-tab' : 'nav-tab'}>
          <Link
            className="nav-link"
            id="chat-tab"
            to="/dashboard/matchView/chat"
            onClick={this.selectChatTab.bind(this)}>
            Chatroom
          </Link>
        </ListItem>
      </Divider>
    );
  }
}

export default NavTabs;
