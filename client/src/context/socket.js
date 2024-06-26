import React, { createContext } from "react";
import socketio from "socket.io-client";

const SOCKET_URL = "https://sprint-planner-server.herokuapp.com/";

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = createContext(socket);
