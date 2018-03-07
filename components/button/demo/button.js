//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../index";

// create a component
class ButtonDemo extends Component {
  render() {
    return (
      <Button type="primary" loading={true} disabled={false}>
        <Text style={{ color: "#fff" }}>Button.</Text>
      </Button>
    );
  }
}

//make this component available to the app
export default ButtonDemo;
