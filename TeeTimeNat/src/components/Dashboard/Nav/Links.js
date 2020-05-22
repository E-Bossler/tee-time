import React, {Component} from 'react';
import {Divider, ListItem} from 'react-native-elements';
import {Redirect, Link} from 'react-router-native';
import {setInStorage} from '../../utils/storage';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    setInStorage('', {});
    this.setState({toLogin: true});
    ///change this to redirect
    window.location.href = '/login';
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect exact to="/signup" />;
    }

    return (
      <Divider
        id="nav-links"
        className={this.props.burgerClicked ? 'slide-left' : 'slide-right'}>
        <ListItem>
          <Link
            id="matchView-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/matchView">
            Current Match
          </Link>
        </ListItem>
        <ListItem>
          <Link
            id="saved-matches-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/userMenu/matches">
            Saved Matches
          </Link>
        </ListItem>
        <ListItem>
          <Link
            id="matchForm-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/matchForm">
            New Match
          </Link>
        </ListItem>
        <ListItem>
          <Link
            id="logout-link"
            className="nav-link"
            onClick={e => {
              this.handleLogOut(e);
            }}
            to="/">
            Logout
          </Link>
        </ListItem>
      </Divider>
    );
  }
}

export default Links;
