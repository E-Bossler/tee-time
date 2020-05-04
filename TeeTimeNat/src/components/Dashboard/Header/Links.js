import React, {Component} from 'react';
import {
  // View,
  Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
  FlatList,
  ListRenderItem,
} from 'react-native';
function Links() {
  return (
    <>
      <FlatList id="nav-links" className="slide-right">
        <ListRenderItem>
          <Text
            className="nav-link"
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('')}>
            Google
          </Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text
            className="nav-link"
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('')}>
            Google
          </Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text
            className="nav-link"
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('')}>
            Google
          </Text>
        </ListRenderItem>
        <ListRenderItem>
          <Text
            className="nav-link"
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('')}>
            Google
          </Text>
        </ListRenderItem>
      </FlatList>
    </>
  );
}

export default Links;
