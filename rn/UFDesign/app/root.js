/**
|--------------------------------------------------
| root
|--------------------------------------------------
*/
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppTheme from "../dist/components/local-theme/index";
import RootContainer from "./container/root";

const Root = () => (
  <View style={{ flex: 1 }}>
    <RootContainer />
    {/* footer */}
    <View style={styles.footer}>
      <Text style={styles.ftext}>TEST_ROOT</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: "center"
  },
  ftext: {
    color: AppTheme.baseMap.color.dividers,
    backgroundColor: "transparent"
  }
});
export default Root;
