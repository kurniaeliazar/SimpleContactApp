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
  updateContact: (contact: contactInfoProps) => void;
  deleteContact: (id: string) => void;
}

interface StateProps {
  contact: contactInfoProps;
}

class ContactEditScreen extends React.PureComponent<
  StateProps & ActionProps,
  any
> {
  constructor(props: any) {
    super(props);
    const { contact } = this.props;
    this.state = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age.toString(),
      photo: contact.photo,
      error: "",
      loading: false
    };
    this.editContact = this.editContact.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  editContact() {
    const { updateContact } = this.props;
    const data: contactInfoProps = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: Number(this.state.age),
      photo: this.state.photo
    };
    updateContact(data);
  }

  deleteData() {
    const { deleteContact } = this.props;
    deleteContact(this.state.id);
  }

  render() {
    const { openContactListScreen } = this.props;
    return (
      <View>
        <HeaderWithBackButton
          title="Edit Contact"
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
            <Button onPress={this.editContact}>Edit</Button>
            <Button onPress={this.deleteData}>Delete</Button>
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
    updateContact: (contact: contactInfoProps) =>
      dispatch(contactActions.editContact(contact)),
    deleteContact: (id: string) => dispatch(contactActions.deleteContact(id))
  })
)(ContactEditScreen);
