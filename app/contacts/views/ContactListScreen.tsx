import React from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

import ContactRow from "./ContactRow";
import { HeaderWithAddButton } from "../../general/Header";
import { Spinner } from "../../general/Spinner";
import { actions as contactActions, selectors } from "../redux";
import { contactInfoProps, State } from "../types";
import { log } from "../../helpers/Logger";
import { TouchableHighlight } from "react-native-gesture-handler";
import contact from "../redux/reducer";

interface ActionProps {
  openAddContactScreen: () => any;
  openEditContactScreen: (contact: contactInfoProps) => any;
}

interface StateProps {
  isContactLoading: boolean;
  contactList: contactInfoProps[];
}

const ContactListScreen: React.FunctionComponent<ActionProps & StateProps> = ({
  contactList,
  openAddContactScreen,
  openEditContactScreen,
  isContactLoading
}) => {
  log(contactList[0]);

  function editContact(contact: contactInfoProps) {
    openEditContactScreen(contact);
  }

  const contactViews = !isContactLoading ? (
    contactList.map(contact => (
      <TouchableHighlight onPress={() => editContact(contact)}>
        <ContactRow contactInfo={contact} />
      </TouchableHighlight>
    ))
  ) : (
    <Spinner />
  );
  return (
    <View>
      <HeaderWithAddButton
        title="Contact List"
        onPress={openAddContactScreen}
      />
      <ScrollView>{contactViews}</ScrollView>
    </View>
  );
};

export default connect<StateProps, ActionProps, {}, State>(
  state => ({
    isContactLoading: selectors.isContactLoading(state),
    contactList: selectors.contactList(state)
  }),
  dispatch => ({
    openAddContactScreen: () => dispatch(contactActions.openContactAddScreen()),
    openEditContactScreen: (contact: contactInfoProps) =>
      dispatch(contactActions.openContactEditScreen(contact))
  })
)(ContactListScreen);
