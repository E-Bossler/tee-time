import axios from "axios";

const GolfAPI = {
    findCourses: () => {
        axios
            .get("https://www.golfgenius.com/api_v2/L7DBdFNJ4i-mR6ZeBOFPMw/events/4995124311334371081/courses")
            .then(res => {
              const courseData = res.data.courses;
              const courses = this.state.courses;
              for (let i = 0; i < courseData.length; i++) {
                courses.push((courseData[i].name).toLowerCase());
              }
              return courses;
            });
    }
}

export default GolfAPI;