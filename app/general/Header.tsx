import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "../styles/colors";

export const HeaderWithAddButton: React.SFC<{
  onPress: () => any;
  title: string;
}> = ({ onPress, title, children }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <View pointerEvents="box-none" style={styles.content}>
        <View style={styles.left}></View>
        <View pointerEvents="none" style={styles.center}>
          <Text style={textStyle}>{title}</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={onPress}>
            <Text style={textStyle}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const HeaderWithBackButton: React.SFC<{
  onPress: () => any;
  title: string;
}> = ({ onPress, title, children }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <View pointerEvents="box-none" style={styles.content}>
        <View style={styles.left}>
          <TouchableOpacity onPress={onPress}>
            <Text style={textStyle}>Back</Text>
          </TouchableOpacity>
        </View>
        <View pointerEvents="none" style={styles.center}>
          <Text style={textStyle}>{title}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  },
  content: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  },
  center: {
    flex: 10
  },
  left: {
    flexDirection: "row",
    height: 50,
    width: 50,
    alignItems: "center"
  },
  right: {
    flexDirection: "row",
    height: 50,
    width: 50,
    paddingRight: 7,
    alignItems: "center"
  }
});
