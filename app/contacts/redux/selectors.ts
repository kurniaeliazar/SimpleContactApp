import { createSelector } from "reselect";

import { Contact } from "../types";

export interface State {
  contactState: Contact;
}

export const scene = (state: State) => state.contactState.scene;
export const contactEdit = (state: State) => state.contactState.contactEdit;
export const contactList = (state: State) => state.contactState.contactList;
export const isContactLoading = (state: State) =>
  state.contactState.isContactLoading;
// export const contactInfo = (state: State) => state.contactListState.contactInfo;

// const getFirstName = (state: State) =>
//   state.contactListState.contactInfo.firstname;
// const getLastName = (state: State) =>
//   state.contactListState.contactInfo.lastname;

// export const fullName = createSelector(
//   [getFirstName, getLastName],
//   (firstname, lastname) => firstname + " " + lastname
// );

// export const name = (state: State) =>
//   state.contactListState.contactInfo.firstname;
