# Chatter
## Installation
- Git clone
- npm install
- nodemon server.js
- cd into the Client directory
- npm start

## Usage
A chat/ messenger app with real-time communication between 2 or more users.

## Description
<img src="https://user-images.githubusercontent.com/24443103/60592761-8677de00-9d5e-11e9-8bda-14413a9437a2.png" height="350" width="250" /><img src="https://user-images.githubusercontent.com/24443103/60592986-0605ad00-9d5f-11e9-9eb0-0ff2c9d23876.png" height="350" width="250" /><img src="https://user-images.githubusercontent.com/24443103/60593077-3c432c80-9d5f-11e9-875b-0f6e7f74ab9e.png" height="350" width="250" />

Chatter is an app developed using React.js, Express.js, and Socket.io to create a real-time messaging experience. Socket.io is a library to work with WebSocket. Socket.io supports broadcasting which allows one user to share information with all of the clients.

I chose to use Socket.io, over the standard WebSocket technology, for the ease of implementation and benefits it could offer if this app were to grow and need fallback options and connections. As this app is today, WebSockets would have worked just fine.

## Looking Forwards and Backwards
### Future Potential

**Testing**
- Is the server running?
- Does the client connect to the server?
- Once connected, does the server echo the event?
- Does the server respond and trigger the listener?
- Does the listener get the correct response?
- Is the client disconnected?

**User typing...**
- See challenges.

**Stronger UI/UX**
- More visual cues to indicate which message belongs to which user (colors, position of messages, etc).
- An alert to a user when a another user has connected or disconnected.
- Timestamps.

### Challenges
- I had a hard time controlling the styles based on the user. Ideally I would like for the message containers to appear on the opposite side of the previous message, if it was sent by a different user.
- I wanted to implement "User typing...". I was able to hack it with a `setTimeout()`, but that was pretty nasty, as it wasn't actually using a listener to determine if the user had actually stopped typing. I think I need to have some sort of timer happening on the server side that can listen for how long it has been since a `keyDown` event, or something along those lines.
