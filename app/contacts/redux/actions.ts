import { ActionType, createAction, createAsyncAction } from "typesafe-actions";

import { contactInfoProps } from "../types";

export const actions = {
  openContactEditScreen: createAction(
    "OPEN_EDIT_EDITOR",
    resolve => (contactData: contactInfoProps) => resolve(contactData)
  ),
  openContactAddScreen: createAction("OPEN_ADD_EDITOR"),
  openContactListScreen: createAction("OPEN_LIST_SCREEN"),
  addNewContact: createAction(
    "SAVE_NEW_CONTACT",
    resolve => (contactData: contactInfoProps) => resolve(contactData)
  ),
  editContact: createAction(
    "EDIT_CONTACT",
    resolve => (contactData: contactInfoProps) => resolve(contactData)
  ),
  deleteContact: createAction("DELETE_CONTACT", resolve => (id: string) =>
    resolve(id)
  ),

  fetchContactList: createAsyncAction(
    "FETCH_CONTACT_LIST",
    "FETCH_CONTACT_LIST_DID_SUCCEED",
    "FETCH_CONTACT_LIST_FAIL"
  )<void, contactInfoProps[], Error>()
};

export type ContactAction = ActionType<typeof actions>;
