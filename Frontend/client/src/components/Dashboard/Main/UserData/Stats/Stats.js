import React, { Component, PureComponent } from "react";
import api from "../../../../utils/api";
import { getFromStorage } from "../../../../utils/storage";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';


const data = [
    {
        name: 'Match 1',strokes: 78,par: 74, amt: 78,
    },
    {
        name: 'Match 2',strokes: 72,par: 72, amt: 74,
    },
    {
        name: 'Match 3',strokes: 97,par: 68, amt: 87,
    },
    {
        name: 'Match 4',strokes: 78,par: 76, amt: 91,
    },
    {
        name: 'Match 5',strokes: 95,par: 76, amt: 82,
    },
];

const radialData = [
    {
        subject: 'Driving', A: 83, B: 83, fullMark: 100,
    },
    {
        subject: 'Chipping', A: 67, B: 67, fullMark: 100,
    },
    {
        subject: 'Putting', A: 56, B: 56, fullMark: 100,
    },
    {
        subject: 'Club Selection', A: 92, B: 92, fullMark: 100,
    },
    {
        subject: 'Course Reading', A: 33, B: 33, fullMark: 100,
    },
    {
        subject: 'Hat choice', A: 70, B: 85, fullMark: 100,
    },
];

const bestFitData = [
    { index: 10000, red: 1643, blue: 790 },
    { index: 1666, red: 182, blue: 42 },
    { index: 625, red: 56, blue: 11 },
    // Calculation of line of best fit is not included in this demo
    { index: 300, redLine: 0 },
    { index: 10000, redLine: 1522 },
    { index: 600, blueLine: 0 },
    { index: 10000, blueLine: 678 },
];

export default class Stats extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            userMatchHistory: [1234],
            userBestMatch: [1234],
            userMostRecentMatch: [1234],
            userFavoriteCourse: '1234',
            userHandicap: [11234],
            data: []
        }

    };

    componentDidMount() {
        this.findUserStats();
    };

    findUserStats() {
        // get token from storage
        let key = "SessionToken";
        const sessionToken = getFromStorage(key);
        // search user session db

        api.verify(sessionToken).then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let checkAgainstId = response.data[i]._id;
                if (
                    sessionToken === checkAgainstId &&
                    response.data[i].isDeleted === false
                ) {
                    const userId = response.data[i].userId;
                    api.getUserWithId(userId).then(response => {
                        for (let i = 0; i < response.data.length; i++) {
                            let checkAgainstId = response.data[i]._id;
                            if (
                                userId === checkAgainstId &&
                                response.data[i].isDeleted === false
                            ) {
                                const username = response.data[i].username;
                                const userMatchHistory = response.data[i].matchHistory
                                this.setState({
                                    username: username,
                                    userMatchHistory: userMatchHistory
                                });

                                this.findUserBestMatch(username)
                                this.findUserMostRecentMatch(username)
                                this.findUserFavoriteCourse(username)
                                this.calculateUserHandicap(username)

                                console.log("Username: ", this.state.username)
                                console.log("User match history: ", this.state.userMatchHistory)
                                console.log("User best match: ", this.state.userBestMatch)
                                console.log("User most recent match: ", this.state.userMostRecentMatch)
                                console.log("User favorite course: ", this.state.userFavoriteCourse)
                                console.log("Handicap: ", this.state.userHandicap)

                            }
                        }
                    });
                }
            }
        });
    }


    findUserBestMatch(username) {



        // this.setState({
        //     userBestMatch: userBestMatch,
        // })
    }

    findUserMostRecentMatch(username) {



        // this.setState({
        //     userMostRecentMatch: userMostRecentMatch,
        // })
    }

    findUserFavoriteCourse(username) {



        // this.setState({
        //     userFavoriteCourse: userFavoriteCourse,
        // })
    }

    calculateUserHandicap(username) {



        // this.setState({
        //     userHandicap: userHandicap,
        // })
    }

    render() {
        return (
            <>
                <h2>
                    Statistics for {this.state.username}:
                </h2>
                <hr>
                </hr>
                <h4>
                    Your recent performances:
                </h4>
                <LineChart
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 20, right: 0, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="strokes" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="par" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
                    <hr></hr>
                    <h4>
                    Statistics for {this.state.username}:
                </h4>
                <RadarChart 
                    cx={200} 
                    cy={150} 
                    outerRadius={100} 
                    width={350} 
                    height={500} 
                    data={radialData} 
                    margin={{
                        top: 20, right: 0, left: 20, bottom: 5,
                    }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </>
        );
    }
}