//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Tpl from "../index";

// create a component
class TplDemo extends Component {
  render() {
    return (
      <Tpl type="primary" loading={true} disabled={false}>
        <Text style={{ color: "#fff" }}>Tpl.</Text>
      </Tpl>
    );
  }
}

//make this component available to the app
export default TplDemo;
