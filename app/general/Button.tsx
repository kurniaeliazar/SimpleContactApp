import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../styles/colors';

const Button: React.SFC<{onPress: () => any}> = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: colors.blue,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.blue,
    marginLeft: 5,
    marginRight: 5
  }
});

export default Button;