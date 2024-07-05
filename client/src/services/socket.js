import openSocket from 'socket.io-client'
export const socket = openSocket(
  process.env.NODE_ENV === 'production'
    ? 'https://sprint-planner-server.herokuapp.com/'
    : 'localhost:8080/'
)
