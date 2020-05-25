import axios from "axios";

const apikey = "L7DBdFNJ4i-mR6ZeBOFPMw";

// const season2020 = "6346727312368647801";
const season2019 = "4995124311334371081";
// const season2018 = "247716410559610772";

const baseURL = `https://www.golfgenius.com/api_v2/${apikey}/events/`;

const GolfAPI = {
  findCourses: () => {
    return axios.get(`${baseURL}${season2019}/courses`);
  },
};

export default GolfAPI;
