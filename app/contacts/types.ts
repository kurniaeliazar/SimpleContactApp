import { reducer as contact } from "./redux";

export enum ContactScreen {
  ContactListScreen = "CONTACT_LIST_SCREEN",
  ContactAddScreen = "CONTACT_ADD_SCREEN",
  ContactEditScreen = "CONTACT_EDIT_SCREEN"
}

export interface contactInfoProps {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface Contact {
  scene: ContactScreen;
  contactEdit: contactInfoProps;
  isContactLoading: boolean;
  contactList: contactInfoProps[];
}

export interface State {
  contactState: ReturnType<typeof contact>;
}
