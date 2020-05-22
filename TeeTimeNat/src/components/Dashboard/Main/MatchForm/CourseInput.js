import React, {Component} from 'react';
import {Divider, Input, Text, Button} from 'react-native-elements';
import CourseDatalist from './CourseDatalist';
import style from './stylesheet.scss';

class CourseInput extends Component {
  render() {
    return (
      <Divider style={style} className="form-group">
        <CourseDatalist
          capCourse={this.props.capCourse}
          courses={this.props.courses}
        />
        <Input
          label="Find Course:"
          type="text"
          list="courses"
          className="form-control"
          id="course-input"
          name="course"
          value={this.props.course}
          onChange={this.props.handleCourseInputChange}
        />
        <Text
          id="not-found-msg"
          className={this.props.courseFound ? 'hide' : 'show'}>
          Sorry, cannot find data for that course.
        </Text>
        <Button id="find-course-btn" onPress={this.props.handleCourseSubmit}>
          Add Course
        </Button>
      </Divider>
    );
  }
}

export default CourseInput;
