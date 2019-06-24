import { Reducer } from "redux";
import { getType } from "typesafe-actions";

import { log } from "../../helpers/Logger";
import {
  contactInfoProps,
  Contact as ContactState,
  ContactScreen
} from "../types";
import { actions, ContactAction } from "./actions";

const emptyContactInfo: contactInfoProps = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  photo: ""
};

const defaultState = {
  scene: ContactScreen.ContactListScreen,
  contactEdit: emptyContactInfo,
  isContactLoading: false,
  contactList: []
};

const contact: Reducer<ContactState, ContactAction> = (
  state = defaultState,
  action
): ContactState => {
  switch (action.type) {
    case getType(actions.openContactAddScreen):
      return { ...state, scene: ContactScreen.ContactAddScreen };

    case getType(actions.openContactListScreen):
      return { ...state, scene: ContactScreen.ContactListScreen };

    case getType(actions.openContactEditScreen):
      return {
        ...state,
        scene: ContactScreen.ContactEditScreen,
        contactEdit: action.payload
      };

    case getType(actions.fetchContactList.request):
      return { ...state, isContactLoading: true };

    case getType(actions.fetchContactList.failure):
      return { ...state, isContactLoading: false };

    case getType(actions.fetchContactList.success):
      return {
        ...state,
        isContactLoading: false,
        contactList: action.payload
      };

    case getType(actions.fetchContactList.request):
      return { ...state, isContactLoading: true };

    case getType(actions.fetchContactList.failure):
      return { ...state, isContactLoading: false };

    default:
      console.log(state);
      return state;
  }
};

export default contact;
