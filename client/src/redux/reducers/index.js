import { combineReducers } from "redux";
import user from "./user";
import votes from "./votes";

export default combineReducers({ user, votes });
