import React, {Component} from 'react';
import {NativeRouter, Switch} from 'react-router-native';
import {Divider} from 'react-native-elements';
import Nav from '../components/Dashboard/Nav/Nav';
import Main from '../components/Dashboard/Main/Main';
import Footer from '../components/Dashboard/Footer/Footer';

class Dashboard extends Component {
  render() {
    return (
      <Divider>
        <NativeRouter>
          <Nav props={this.props} />
          <Switch>
            <Main />
          </Switch>
          <Switch>
            <Footer />
          </Switch>
        </NativeRouter>
      </Divider>
    );
  }
}

export default Dashboard;
