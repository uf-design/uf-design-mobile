//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Loading from "../index";

// create a component
class LoadingDemo extends Component {
  render() {
    return (
      <Loading
        visible={true}
        label="loading..."
        overlayColor={"rgba(0,0,0,.6)"}
      />
    );
  }
}

//make this component available to the app
export default LoadingDemo;
