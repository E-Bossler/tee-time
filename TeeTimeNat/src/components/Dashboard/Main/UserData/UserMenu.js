import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import {Switch, Route} from 'react-router-native';
import Stats from './Stats/Stats';
import Courses from './Courses/Courses';
import Friends from './Friends/Friends';
import Matches from './Matches/Matches';

class UserMenu extends Component {
  render() {
    return (
      <Divider>
        <Switch>
          <Route path="/dashboard/userMenu/stats">
            <Stats userData={this.props.userData} />
          </Route>

          <Route path="/dashboard/userMenu/courses">
            <Courses userData={this.props.userData} />
          </Route>

          <Route path="/dashboard/userMenu/friends">
            <Friends
              userData={this.props.userData}
              username={this.props.username}
            />
          </Route>

          <Route path="/dashboard/userMenu/matches">
            <Matches userData={this.props.userData} />
          </Route>
        </Switch>
      </Divider>
    );
  }
}

export default UserMenu;
