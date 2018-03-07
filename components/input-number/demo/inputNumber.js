//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import InputNumber from "../index";

// create a component
class ButtonDemo extends Component {
  render() {
    return (
      <InputNumber
        maxValue={10}
        minValue={2}
        defaultValue={2}
        onChange={n => alert(n)}
      />
    );
  }
}

//make this component available to the app
export default ButtonDemo;
