import React, {Component} from 'react';
import {Divider, Text, Icon} from 'react-native-elements';
import style from './stylesheet.scss';

class MatchCourse extends Component {
  render() {
    let courseFound = false;

    if (this.props.matchCourse !== '') {
      courseFound = true;
    }

    return (
      <Divider style={style} id="course-container">
        <Text h3>Match Course:</Text>
        <Text className={courseFound ? 'hide' : 'show'}>
          No course added yet
        </Text>
        <Divider id="course-name" className={courseFound ? 'show' : 'hide'}>
          <Text>{this.props.matchCourse}</Text>
          <Icon
            className="fas fa-times"
            onClick={this.props.handleCourseDelete}
          />
        </Divider>
      </Divider>
    );
  }
}

export default MatchCourse;
