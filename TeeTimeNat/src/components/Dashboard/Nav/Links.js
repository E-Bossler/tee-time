import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

function Links() {
  return (
    <View className="slide-right">
      <Link to="/dashboard/game/stats">
        <Text className="nav-link">Stats</Text>
      </Link>
      <Link to="/dashboard/game/tracker">
        <Text className="nav-link">Tracker</Text>
      </Link>
      <Link to="/dashboard/game/chat">
        <Text className="nav-link">Friends</Text>
      </Link>
      <Link to="/dashboard/game/new">
        <Text className="nav-link">New Match</Text>
      </Link>
      <Link to="/dashboard">
        <Text className="nav-link">Logout</Text>
      </Link>
    </View>
  );
}

export default Links;
