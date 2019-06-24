import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { HeaderWithBackButton } from "../../general/Header";
import Card from "../../general/Card";
import CardSection from "../../general/CardSection";
import Input from "../../general/Input";
import Button from "../../general/Button";
import { contactInfoProps, State } from "../types";
import { actions as contactActions, selectors } from "../redux";

import { log } from "../../helpers/Logger";

interface ActionProps {
  openContactListScreen: () => void;
  saveNewContact: (contact: contactInfoProps) => any;
}

interface StateProps {
  contact: contactInfoProps;
}

class ContactAddScreen extends React.PureComponent<
  StateProps & ActionProps,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
      error: "",
      loading: false
    };
    this.saveContact = this.saveContact.bind(this);
  }

  saveContact() {
    const { saveNewContact } = this.props;
    const data: contactInfoProps = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: Number(this.state.age),
      photo: this.state.photo
    };

    saveNewContact(data);
  }

  render() {
    const { openContactListScreen } = this.props;
    return (
      <View>
        <HeaderWithBackButton
          title="Add New Contact"
          onPress={openContactListScreen}
        />
        <Card>
          <CardSection>
            <Input
              placeholder="Input your firstname"
              label="First Name"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
              secureTextEntry={false}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={false}
              placeholder="Input your firstname"
              label="Last Name"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={false}
              placeholder="some number"
              label="Age"
              value={this.state.age}
              onChangeText={age => this.setState({ age })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={false}
              placeholder="your photo url"
              label="Photo"
              value={this.state.photo}
              onChangeText={photo => this.setState({ photo })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.saveContact}>Save</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default connect<StateProps, ActionProps, {}, State>(
  state => ({
    contact: selectors.contactEdit(state)
  }),
  dispatch => ({
    openContactListScreen: () =>
      dispatch(contactActions.openContactListScreen()),
    saveNewContact: (contact: contactInfoProps) =>
      dispatch(contactActions.addNewContact(contact))
  })
)(ContactAddScreen);
