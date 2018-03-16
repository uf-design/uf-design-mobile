//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AppTheme from "../../dist/components/local-theme/index";
import {
  Button,
  Checkbox,
  InputNumber,
  Modal,
  Tips,
  Loading,
  Select,
  Calendar
} from "../../dist/components/indexDemo";
// create a component
const customStyle = {
  calendarContainer: {
    backgroundColor: "#fff"
  },
  selectedDayCircle: {
    backgroundColor: "blue"
  }
};
class RootContaner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button />
        {/*   <InputNumber />
        <Checkbox /> 
        <Loading />*/}
        <Calendar />
        {/* <Select /> */}

        <Tips />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: AppTheme.baseMap.color.background
  }
});

//make this component available to the app
export default RootContaner;
