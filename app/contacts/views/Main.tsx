import React from "react";
import { connect } from "react-redux";

import { State } from "../../reducer";
import { selectors } from "../redux";
import { ContactScreen } from "../types";
import ContactList from "./ContactListScreen";
import ContactAdder from "./ContactAddScreen";
import ContactEditor from "./ContactEditScreen";

interface StateProps {
  scene: ContactScreen;
}

const Main: React.SFC<StateProps> = ({ scene }) => {
  switch (scene) {
    case ContactScreen.ContactAddScreen:
      return <ContactAdder />;
    case ContactScreen.ContactListScreen:
      return <ContactList />;
    case ContactScreen.ContactEditScreen:
      return <ContactEditor />;
    default:
      return <ContactList />;
  }
};

export default connect<StateProps, {}, {}, State>(state => ({
  scene: selectors.scene(state)
}))(Main);
