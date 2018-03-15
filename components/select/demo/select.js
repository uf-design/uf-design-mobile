//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Select from "../index";

// create a component
class SelectDemo extends Component {
  makeData() {
    let arr = [];
    for (let index = 0; index < 26; index++) {
      arr.push({
        id: index,
        name: Math.random()
          .toString(36)
          .substr(2)
      });
    }
    return arr;
  }
  state = {
    visible: true,
    options: this.makeData(),
    selected: {}
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ visible: true })}>
          <Text>select.</Text>
        </TouchableOpacity>
        <Select
          visible={this.state.visible}
          selected={this.state.selected}
          options={this.state.options}
          onChange={sel => (this.state.selected = sel)}
        />
      </View>
    );
  }
}

//make this component available to the app
export default SelectDemo;
