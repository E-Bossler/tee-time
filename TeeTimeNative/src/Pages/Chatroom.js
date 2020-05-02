import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  // TouchableHighlight,
} from 'react-native';
import io from 'socket.io-client';
export default class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.138.2:7777');
    this.socket.on('connect', () => console.log('connected'));
    this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMsg, i) => (
      <Text key={i} style={{borderWidth: 2, top: 500}}>
        {chatMsg}
      </Text>
    ));

    return (
      <View style={styles.container}>
        {chatMessages}
        <TextInput
          style={{height: 40, borderWidth: 2, top: 600}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
