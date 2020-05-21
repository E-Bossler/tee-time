import React, {Component} from 'react';
import {Divider, Text, ListItem} from 'react-native-elements';
import GolfAPI from '../../../../utils/golfGeniusAPI';
import './stylesheet.css';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      userCourses: [],
      allCourses: [],
    };
  }

  componentDidMount() {
    GolfAPI.findCourses().then(res => {
      const courseData = res.data.courses;
      const courses = [];
      for (let i = 0; i < courseData.length; i++) {
        courses.push(courseData[i].name);
      }
      this.setState({allCourses: courses});
      // console.log(courses);
    });
  }

  render() {
    return (
      <Divider id="courses-container">
        <Text h3>My Favorite Courses:</Text>
        <Divider id="user-courses-list">
          <ListItem>Placeholder Greens</ListItem>
        </Divider>
        <Text h3>All Available Courses:</Text>
        <Divider id="all-courses-list">
          {this.state.allCourses.map((value, index) => {
            return <ListItem key={index}>{value}</ListItem>;
          })}
        </Divider>
      </Divider>
    );
  }
}

export default Courses;
