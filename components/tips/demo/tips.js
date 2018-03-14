//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import Tips from "../index";

// create a component
class TipsDemo extends Component {
  state = {
    visible: false
  };

  handlerPress() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.handlerPress()}>
          <Text>tips</Text>
        </TouchableHighlight>
        {/* <Tips
          visible={this.state.visible}
          mask={false}
          content={"Ailun mask，spaceX go。。。"}
          contentStyle={[{ backgroundColor: "red" }]}
        /> */}
        {/* type2 */}
        <Tips visible={this.state.visible} mask={true}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 4,
              opacity: 0.6
            }}
          >
            <Text style={{ color: "#fff" }}>内嵌元素实现思路</Text>
          </View>
        </Tips>
      </View>
    );
  }
}

//make this component available to the app
export default TipsDemo;
