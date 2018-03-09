//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Tips from "../index";

// create a component
class TipsDemo extends Component {
  state = {
    visible: false
  };
  render() {
    return (
      <View>
        <Tips visible={true} mask={false}
          content={"我就是tips，spaceX go。。。"}
          contentStyle={[{ backgroundColor: 'red' }]}
        />
      </View>

    );
  }
}

//make this component available to the app
export default TipsDemo;
