import { types } from "../actions/types";
import store from "../../store";
import { resetUserVotes } from "./user";

const {
  ADD_USER_TO_LIST,
  UPDATE_USER_VOTES,
  UPDATE_ALL_VOTES,
  RESET_VOTES,
  GET_ALL_USERS,
} = types;

export const addUserToList = (user) => (dispatch) => {

  dispatch({
    type: ADD_USER_TO_LIST,
    payload: user,
  });
};

export const getAllUsers = (allUsers) => (dispatch) => {
  dispatch({
    type: GET_ALL_USERS,
    payload: allUsers,
  });
};

export const updateVotes = (newVote) => (dispatch) => {
  const currentUserVotes = store.getState().user.votes;
  for (const vote in currentUserVotes) {
    if (currentUserVotes[vote].category === newVote.category) {
      currentUserVotes[vote] = newVote;
    }
  }

  dispatch({
    type: UPDATE_USER_VOTES,
    payload: currentUserVotes,
  });

  const allUserVotes = store.getState().votes;

  for (const user in allUserVotes) {
    if (allUserVotes[user].id === newVote.id) {
      const userUpdatingVote = allUserVotes[user];
      for (const vote in userUpdatingVote.votes) {
        if (userUpdatingVote.votes[vote].category === newVote.category) {
          userUpdatingVote.votes[vote] = newVote;
        }
      }
    }
  }

  dispatch({
    type: UPDATE_ALL_VOTES,
    payload: allUserVotes,
  });
};

export const resetVotes = () => (dispatch) => {
  dispatch(resetUserVotes());

  const allUsers = store.getState().votes;

  for (const user in allUsers) {
    allUsers[user].votes = [
      { category: "Uncertainty", value: "N/A", id: user.id },
      { category: "Complexity", value: "N/A", id: user.id },
      { category: "Effort", value: "N/A", id: user.id },
    ];
  }

  dispatch({
    type: RESET_VOTES,
    payload: allUsers,
  });
};
