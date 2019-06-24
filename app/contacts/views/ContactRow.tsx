import React from "react";
import { Text, View, Image, Linking, StyleSheet } from "react-native";

import Button from "../../general/Button";
import Card from "../../general/Card";
import CardSection from "../../general/CardSection";
import CirclePhotoHolder from "../../general/CirclePhotoHolder";
import { textStyle } from "../../styles/fonts";

import { contactInfoProps } from "../types";

interface StateProps {
  contactInfo: contactInfoProps;
}

const ContactRow: React.FunctionComponent<StateProps> = ({ contactInfo }) => {
  const { id, firstName, lastName, photo, age } = contactInfo;

  return (
    <Card>
      <CardSection>
        <View style={styles.contentStyle}>
          <CirclePhotoHolder sourceImage={photo} />
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.contentStyle}>
          <Text style={textStyle.title}>{`${firstName} ${lastName}`}</Text>
          <Text>{`${age} years old`}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  }
});

export default ContactRow;
