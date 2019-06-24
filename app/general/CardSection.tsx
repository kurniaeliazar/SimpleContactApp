import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../styles/colors';

const Card: React.SFC<{}> = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: colors.grey,
    position: 'relative'
  }
});

export default Card;