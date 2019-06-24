import { getType } from "typesafe-actions";

import { actions as allActions } from "./redux";

//
// VIEWS
//
export { default as View } from "./views/ContactListScreen";

//
// REDUX
//
export { selectors, reducer } from "./redux";

//
// SAGAS
//
export { default as sagas } from "./sagas";

//
// ERRORS (to be handled in ErrorHandler module):
//
export const profileErrorActionTypes = [
  getType(allActions.fetchContactList.failure)
];

//
// SCREENS
//
// export { screenToViewMap } from "./navigation";
