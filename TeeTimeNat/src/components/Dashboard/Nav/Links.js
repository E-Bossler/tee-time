import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import {Link} from 'react-router-native';

function Links() {
  return (
    <View>
      <FlatList id="nav-links" className="slide-right">
        <ListRenderItem>
          <Link className="nav-link" to="/dashboard/game/stats">
            <Text>Stats</Text>
          </Link>
        </ListRenderItem>
        <ListRenderItem>
          <Link className="nav-link" to="/dashboard/game/tracker">
            <Text>Tracker</Text>
          </Link>
        </ListRenderItem>
        <ListRenderItem>
          <Link className="nav-link" to="/dashboard/game/chat">
            <Text>Friends</Text>
          </Link>
        </ListRenderItem>
        <ListRenderItem>
          <Link className="nav-link" to="/dashboard/game/new">
            <Text>New Match</Text>
          </Link>
        </ListRenderItem>
        <ListRenderItem>
          <Link className="nav-link" to="/dashboard">
            <Text>Logout</Text>
          </Link>
        </ListRenderItem>
      </FlatList>
    </View>
  );
}

export default Links;
