import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';

function Links() {
  return (
    <View>
      <FlatList id="nav-links" className="slide-right">
        <ListRenderItem>
          <Text>Google</Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text>Google</Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text>Google</Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text>Google</Text>
        </ListRenderItem>
      </FlatList>
    </View>
  );
}

export default Links;
