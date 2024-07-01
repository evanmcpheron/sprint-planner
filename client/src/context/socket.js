import { createContext } from 'react'
import socketio from 'socket.io-client'

const SOCKET_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://sprint-planner-server.herokuapp.com/'
    : 'localhost:8080/'

export const socket = socketio.connect(SOCKET_URL)
export const SocketContext = createContext(socket)
