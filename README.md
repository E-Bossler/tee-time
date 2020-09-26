<div align="center">

# Tee-Time

The free, social golf app for desktop and Android!

## Elevator Pitch
Several on-the-market golf apps offer minimal functionality gated off by large subscription fees and misc. charges.

<b>Example:</b> Golf Genius charges $800 to track a single season of golf, and locks away chat behind another $3000 payment.

Tee Time offers robust functionality for no subscription fees, no payments, allowing users to focus on what matters: Golf!


## Live Demos

<h3>Tee Time in Browser</h3>
<p>Demonstration of live scoring, creating matches, adding friends, and chat.</p>


  <a :target="_blank" href="https://www.teetimeproject.com/">Web Demo</a>


  <img src="./tee-time-demo.gif" />


<br>
<br>

<h3>Tee Time on Mobile w/ React Native</h3>
<p>Demonstration of live mobile build interacting with deployed browser app.</p>


  <a :target="_blank" href="https://exp.host/@dustinjack99/tee-time-nat">Mobile Demo on Expo</a>


  <img src="./tee-time-nat-demo.gif" />



## The Assignment
This app was the second project for UW Full-Stack Bootcamp. The requirements were to make an application with a friendly client-side UI utilizing the MERN stack framework (Mongo DB, Express, React, and Node). 
	
## The Team

<div align="left">
This project if brought to you by:

- Austen Turner (austenpturner)
- Dustin Jackson (dustinjack99)
- Eric Bossler (e-bossler)
- Jon Lee (enadan)
</div>

## The Process
### Technologies Used:
Stack: React, Express, MongoDB (Mongoose), Node.js
Third-Party Libraries: Socket.io, BCrypt HASH, Recharts, SASS, Axios, SweetAlert2.0
API: Golf Genius


	
### Notes on Native Development (by Dustin)

<div align="left">
This was my first foray into mobile development, and there were a lot of traps I fell into that made porting to React Native tricky. For one, I couldn't develop for iOS, because you can't touch iOS code without Xcode (which was not possible on my PC). Below are some other pitfalls that Devs should be aware of when porting a React app over to React Native:

+ React Native not as supported as React for the web.
	- You will be working with much newer libraries and many
	more errors to troubleshoot, many of which you can't Stack Overflow.
  - Compared to React web dev, there is a lot of uncharted territory.
	
+ Set aside an entire day to even get React Native running. Getting
all the tools installed is a day-long task.

+ For Native dev, get a Mac!
	- This can't be stressed enough. I wasn't able to develop an iOS client
  because I only have a PC.

+ Use Expo for running / testing builds (not an emulator on your machine).
	- Running React Native through an emulator dramatically slows down your 
  computer, and the builds take much longer to finish and debug.

+ Development is dramatically different than React Web Dev (especially navigation).
	- Your Navigation will need to be rebuilt from the ground up.
	- There is no DOM to traverse. You will need to navigate based on the
  'flow' your app takes the user through.
	- When porting over, read up on navigators from React Navigation.
</div>

## Future Development
We are very proud of our MVP, however we believe there are a few features that could be added to create an awesome user experience. For example, we would love to have a real time GPS tracking of golfers on individual courses and holes. This could be used to see where your partners are on the course, or if other users are also playing the same course. 

Utilizing a google-maps-like API we believe we this could be accomplished, however due to schedule constraints this was unable to be implemented.

Also, a user store for golf related items would be a good addition to this applciation for monetization purposes. We could also include a section of the application called the 'clubhouse' or some other general term for user interactions outside of a golf match. 

## Thanks for reading! :smile:
Please contact the team with any questions or comments.
</div>
