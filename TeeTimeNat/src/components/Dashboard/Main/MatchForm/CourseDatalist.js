import React, {Component} from 'react';
import {Divider, ListItem} from 'react-native-elements';

class CourseDatalist extends Component {
  render() {
    return (
      ///This was a datalist
      <Divider id="courses">
        {this.props.courses.map((course, key) => (
          <ListItem key={key} value={this.props.capCourse(course)} />
        ))}
      </Divider>
    );
  }
}

export default CourseDatalist;
