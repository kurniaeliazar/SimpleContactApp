import { reducer as contactState } from "./contacts/redux";
import { combineReducers } from "redux";

export default combineReducers<State>({
  contactState
});

export interface State {
  contactState: ReturnType<typeof contactState>;
}
