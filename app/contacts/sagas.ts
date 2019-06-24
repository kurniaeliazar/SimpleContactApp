import { StackActions, NavigationActions } from "react-navigation";
import { fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { actions as contactActions, selectors } from "./redux";
import { ActionType, getType } from "typesafe-actions";

import { debug } from "../helpers/Logger";
import { contactInfoProps } from "./types";

function fetchContact() {
  return axios({
    method: "get",
    url: "https://simple-contact-crud.herokuapp.com/contact"
  });
}

function saveContact(contact: contactInfoProps) {
  return axios({
    method: "post",
    url: "https://simple-contact-crud.herokuapp.com/contact",
    data: contact
  });
}

function deleteContact(id: string) {
  return axios({
    method: "delete",
    url: "https://simple-contact-crud.herokuapp.com/contact/" + id
  });
}

function updateContact(contact: contactInfoProps) {
  return axios({
    method: "put",
    url: "https://simple-contact-crud.herokuapp.com/contact/" + contact.id,
    data: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      photo: contact.photo
    }
  });
}

function* fetchContactList() {
  try {
    yield put(contactActions.fetchContactList.request());
    const response = yield call(fetchContact);
    yield put(contactActions.fetchContactList.success(response.data.data));
  } catch (error) {
    yield put(contactActions.fetchContactList.failure(error));
  }
}

function* saveNewContact(
  action: ActionType<typeof contactActions.addNewContact>
) {
  const contactData = action.payload;
  debug(contactData);
  try {
    const response = yield call(saveContact, contactData);
    debug(response);
    yield call(contactActions.openContactListScreen);
  } catch (error) {
    debug(error);
  }
}

function* editFromContactList(
  action: ActionType<typeof contactActions.openContactEditScreen>
) {
  const data = action.payload;
  try {
    const response = yield call(updateContact, data);
    debug(response);
    yield call(contactActions.openContactListScreen);
  } catch (error) {
    debug(error);
  }
}

function* deleteFromContactList(
  action: ActionType<typeof contactActions.deleteContact>
) {
  const id = action.payload;
  debug("delete");
  debug(id);
  try {
    const response = yield call(deleteContact, id);
    debug(response);
    yield put({ type: "OPEN_LIST_SCREEN" });
  } catch (error) {
    debug(error);
  }
}

export function* watcherSaga() {
  yield fork(fetchContactList);
  yield takeEvery(
    getType(contactActions.openContactListScreen),
    fetchContactList
  );
  yield takeEvery(getType(contactActions.addNewContact), saveNewContact);
  yield takeEvery(getType(contactActions.deleteContact), deleteFromContactList);
  yield takeEvery(getType(contactActions.editContact), editFromContactList);
}
