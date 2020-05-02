import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Press me!</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => (
          <Text key={i}>{todo}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Todo;
