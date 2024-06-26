import openSocket from "socket.io-client";
export const socket = openSocket(
  "https://sprint-planner-server.herokuapp.com/"
);
