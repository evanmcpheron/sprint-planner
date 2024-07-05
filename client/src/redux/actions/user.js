import { types } from "../actions/types";
import store from "../../store";

const { ADD_USER, ENTER_ROOM, RESET_USER_VOTES } = types;

export const addUser = (name, id, room) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: {
      name,
      id,
      room,
      votes: [
        { category: "Uncertainty", value: "N/A", id },
        { category: "Complexity", value: "N/A", id },
        { category: "Effort", value: "N/A", id },
      ],
    },
  });
};

export const enterRoom = (roomId) => (dispatch) => {
  dispatch({
    type: ENTER_ROOM,
    payload: roomId,
  });
};

export const resetUserVotes = () => (dispatch) => {
  const currentUser = store.getState().user;
  dispatch({
    type: RESET_USER_VOTES,
    payload: currentUser.id,
  });
};
